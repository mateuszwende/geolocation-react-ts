import React from "react";
import { GeolocationSwitch, DataView, RawDataView } from "../";
import { GeoDataT, GeoLocationActions } from "../../state/geoLocation/types";
import { GeoLocationActionT } from "../../state/geoLocation/types";

type PropsT = {
  data: GeoDataT[];
  isTracking: boolean;
  dispatch: (action: GeoLocationActionT) => void;
};

const DataInfo: React.FC<PropsT> = ({ data, isTracking, dispatch }) => {
  return (
    <>
      <GeolocationSwitch
        checked={isTracking}
        onChange={() =>
          dispatch({
            type: GeoLocationActions.SET_IS_TRACKING,
            payload: !isTracking,
          })
        }
      />
      <DataView
        title="Starting position"
        titleColor="red"
        latitude={data[0].latitude}
        longitude={data[0].longitude}
        measurementTime={data[0].measurementTime}
      />
      <DataView
        title="Current position"
        titleColor="blue"
        latitude={data[data.length - 1].latitude}
        longitude={data[data.length - 1].longitude}
        measurementTime={data[data.length - 1].measurementTime}
      />
      <RawDataView data={data} />
    </>
  );
};

export default DataInfo;
