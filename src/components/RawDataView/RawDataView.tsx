import React, { useState, useMemo } from "react";
import { Button, Typography } from "@material-ui/core";
import { GeoDataT } from "../../state/geoLocation/types";

type RawDataViewPropsT = {
  data: GeoDataT[];
};

const RawDataView: React.FC<RawDataViewPropsT> = ({ data }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const jsonData = useMemo(() => JSON.stringify(data), [data]);

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <>Hide raw data</> : <>Show raw data</>}
      </Button>
      <div className="vertical-spacing">
        {isVisible ? (
          <Typography style={{ overflowWrap: "break-word" }}>
            {jsonData}
          </Typography>
        ) : null}
      </div>
    </>
  );
};

export default RawDataView;
