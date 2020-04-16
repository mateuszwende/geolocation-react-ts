import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

type GeolocationSwitchPropsT = {
  checked: boolean;
  onChange: () => void;
};

const GeolocationSwitch: React.FC<GeolocationSwitchPropsT> = ({
  checked,
  onChange,
}) => {
  return (
    <div className="vertical-spacing">
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={() => onChange()}
            name="Geolocalization Availability"
            inputProps={{ "aria-label": "primary switch" }}
          ></Switch>
        }
        label="On/Off track geolocation"
      />
    </div>
  );
};

export default GeolocationSwitch;
