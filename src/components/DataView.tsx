import React, { PureComponent } from "react";
import { Typography } from "@material-ui/core";
import { format } from "date-fns";

type DataViewPropsT = {
  title: string;
  latitude: number;
  longitude: number;
  measurementTime: Date;
};

export default class DataView extends PureComponent<DataViewPropsT> {
  render() {
    const { title, latitude, longitude, measurementTime } = this.props;
    return (
      <div className="vertical-spacing text-align-left">
        <Typography variant="body1" component="p">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          <b>Latitude:</b> {latitude}
        </Typography>

        <Typography variant="body2" component="p">
          <b>Longitude</b>: {longitude}
        </Typography>
        <Typography variant="body2" component="p">
          <b>Measurement time</b>{" "}
          {format(measurementTime, "HH:mm:ss dd-MM-yyyy")}
        </Typography>
      </div>
    );
  }
}
