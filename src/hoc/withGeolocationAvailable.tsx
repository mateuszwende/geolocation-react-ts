import React from "react";
import { GeoLocationErrorMessages } from "../state/geoLocation/types";

const withGeolocationAvailable = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => ({ ...props }) =>
  "geolocation" in navigator ? (
    <Component {...(props as P)} />
  ) : (
    <p>{GeoLocationErrorMessages.BROWSER_NO_SUPPORT}</p>
  );

export default withGeolocationAvailable;
