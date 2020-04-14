import React from "react";
import { isMobile, isTablet } from "react-device-detect";

const withOnlyMobileAndTablet = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => ({ ...props }) =>
  isMobile || isTablet ? (
    <Component {...(props as P)} />
  ) : (
    <p>App is only available on mobile and tablets.</p>
  );

export default withOnlyMobileAndTablet;
