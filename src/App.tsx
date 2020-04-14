import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import {
  GeoLocationActions,
  GeoLocationErrorMessages,
  GeoDataT,
} from "./state/geoLocation/types";
import MapContainer from "./containers/MapContainer";
import {
  geoLocationReducer,
  initialGeoLocationState,
} from "./state/geoLocation/reducer";
import {
  Switch,
  FormGroup,
  FormControlLabel,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import withGeolocationAvailable from "./hoc/withGeolocationAvailable";
import withOnlyMobileAndTablet from "./hoc/withOnlyMobileAndTablet";
import { useInterval } from "./hooks/useInterval";
import DataView from "./components/DataView";
import ErrorDialog from "./components/ErrorDialog";

const App: React.FC = () => {
  const [geoLocation, dispatchGeoLocation] = useReducer(
    geoLocationReducer,
    initialGeoLocationState
  );
  const [rawDataView, toggleRawDataView] = useState<boolean>(false);

  /**
   * Get position every <geoLocation.timeInterval> ms
   */
  useInterval(
    getCurrentPosition,
    geoLocation.isTracking ? geoLocation.timeInterval : null
  );

  /**
   * Start getting position as the app did mount
   */
  useEffect(() => {
    getCurrentPosition();
  }, []);

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      onGeolocateSuccess,
      onGeolocateError,
      {
        enableHighAccuracy: true,
      }
    );
  }

  function onGeolocateSuccess(position: Position) {
    dispatchGeoLocation({
      type: GeoLocationActions.ADD_LOCALIZATION,
      payload: {
        id: 0,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        measurementTime: new Date(position.timestamp),
      },
    });
  }

  function onGeolocateError(error: PositionError) {
    dispatchGeoLocation({
      type: GeoLocationActions.SET_ERROR,
      payload: {
        measurementTime: new Date(),
        message: getGeolocateErrorMessage(error),
      },
    });
  }

  function getGeolocateErrorMessage(error: PositionError) {
    if (error.code === error.PERMISSION_DENIED) {
      return GeoLocationErrorMessages.PERMISSION_DENIED;
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      return GeoLocationErrorMessages.POSITION_UNAVAILABLE;
    }
    return GeoLocationErrorMessages.DEFAULT;
  }

  function createDataForPins(data: GeoDataT[]) {
    if (data.length > 1) {
      return [data[0], data[data.length - 1]];
    } else if (data.length === 1) {
      return [data[0]];
    }
    return data;
  }

  return (
    <Container>
      <Typography align="center" variant="h5" className="vertical-spacing">
        TrackMeNow
      </Typography>
      {geoLocation.data.length ? (
        <>
          <MapContainer
            data={createDataForPins(geoLocation.data)}
            initialLatitude={geoLocation.data[0].latitude}
            initialLongitude={geoLocation.data[0].longitude}
            zoom={16}
            width="100%"
            height="500px"
          />
          <FormGroup row className="vertical-spacing">
            <FormControlLabel
              control={
                <Switch
                  checked={geoLocation.isTracking}
                  onChange={() => {
                    dispatchGeoLocation({
                      type: GeoLocationActions.SET_IS_TRACKING,
                      payload: !geoLocation.isTracking,
                    });
                  }}
                  name="Geolocalization Availability"
                  inputProps={{ "aria-label": "primary switch" }}
                ></Switch>
              }
              label="On/Off track geolocation"
            />
          </FormGroup>
          <DataView
            title="Starting position"
            titleColor="red"
            latitude={geoLocation.data[0].latitude}
            longitude={geoLocation.data[0].longitude}
            measurementTime={geoLocation.data[0].measurementTime}
          />
          <DataView
            title="Current position"
            titleColor="blue"
            latitude={geoLocation.data[geoLocation.data.length - 1].latitude}
            longitude={geoLocation.data[geoLocation.data.length - 1].longitude}
            measurementTime={
              geoLocation.data[geoLocation.data.length - 1].measurementTime
            }
          />
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => toggleRawDataView(!rawDataView)}
          >
            {rawDataView ? <>Hide raw data</> : <>Show raw data</>}
          </Button>
          <div className="vertical-spacing">
            {rawDataView ? (
              <Typography style={{ overflowWrap: "break-word" }}>
                {JSON.stringify(geoLocation.data)}
              </Typography>
            ) : null}
          </div>
        </>
      ) : null}
      <ErrorDialog
        onClose={() =>
          dispatchGeoLocation({
            type: GeoLocationActions.SET_ERROR,
            payload: undefined,
          })
        }
        open={geoLocation.error ? true : false}
        title="Error occuried."
        message={geoLocation.error?.message!}
      />
    </Container>
  );
};

export default withOnlyMobileAndTablet(withGeolocationAvailable(App));
