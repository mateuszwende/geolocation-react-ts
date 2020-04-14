import React, { PureComponent } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { ViewportProps } from "react-map-gl";
import { GeoDataT } from "../state/geoLocation/types";
import { Pins } from "../components/Pins";

type PropsT = {
  data: GeoDataT[];
  initialLatitude: number;
  initialLongitude: number;
  zoom: number;
  width: string;
  height: string;
};

type StateT = {
  viewport: Partial<ViewportProps>;
};

class MapContainer extends PureComponent<PropsT, StateT> {
  state: Readonly<StateT> = {
    viewport: {
      latitude: this.props.initialLatitude,
      longitude: this.props.initialLongitude,
      zoom: this.props.zoom,
    },
  };

  render() {
    const { width, height } = this.props;
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibGV0b3V0IiwiYSI6ImNrOGxiamdxejAwbG4zZm83bHZ1aHVhNnkifQ.Pvz5iOHGNQt8uo9_ilavtA"
        }
        width={width}
        height={height}
      >
        <Pins data={this.props.data} />
      </ReactMapGL>
    );
  }
}

export default MapContainer;
