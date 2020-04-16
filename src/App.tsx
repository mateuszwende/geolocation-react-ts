import React, { useEffect, useReducer } from "react";
import "./App.css";
import { Container, Typography } from "@material-ui/core";
import MapContainer from "./containers/MapContainer";
import { ErrorDialog, DataInfo } from "./components";
import { withGeolocationAvailable, withOnlyMobileAndTablet } from "./hoc";
import { GeoLocationActions } from "./state/geoLocation/types";
import {
  createDataForPins,
  getCurrentPosition,
} from "./state/geoLocation/operations";
import {
  geoLocationReducer,
  initialGeoLocationState,
} from "./state/geoLocation/reducer";
import { useInterval } from "./hooks/useInterval";

const App: React.FC = () => {
  const [geoLocation, dispatchGeoLocation] = useReducer(
    geoLocationReducer,
    initialGeoLocationState
  );

  /**
   * Get position every <geoLocation.timeInterval> ms
   */
  useInterval(
    () => getCurrentPosition(dispatchGeoLocation),
    geoLocation.isTracking ? geoLocation.timeInterval : null
  );

  /**
   * Start getting position as the app did mount
   */
  useEffect(() => {
    getCurrentPosition(dispatchGeoLocation);
  }, []);

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
          <DataInfo
            data={geoLocation.data}
            isTracking={geoLocation.isTracking}
            dispatch={dispatchGeoLocation}
          />
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
