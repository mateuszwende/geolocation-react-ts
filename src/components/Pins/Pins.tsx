import React, { PureComponent } from "react";
import { GeoDataT } from "../../state/geoLocation/types";
import Pin from "../Pin/Pin";

type PinsPropsT = {
  data: GeoDataT[];
};

export default class Pins extends PureComponent<PinsPropsT> {
  render() {
    const { data } = this.props;
    return data.map((item) => {
      return (
        <Pin
          latitude={item.latitude}
          longitude={item.longitude}
          color={item.id === 0 ? "red" : "blue"}
          size={25}
          key={item.id}
        />
      );
    });
  }
}
