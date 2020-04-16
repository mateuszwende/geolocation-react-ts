import {
  GeoDataT,
  GeoLocationErrorMessages,
  GeoLocationActionT,
  GeoLocationActions,
} from "./types";

export const getCurrentPosition = (
  dispatch: (action: GeoLocationActionT) => void,
  options: PositionOptions = { enableHighAccuracy: true }
) => {
  navigator.geolocation.getCurrentPosition(
    (position: Position) => onGeolocateSuccess(position, dispatch),
    (error: PositionError) => onGeolocateError(error, dispatch),
    options
  );
};

export const onGeolocateSuccess = (
  position: Position,
  dispatch: (action: GeoLocationActionT) => void
) => {
  dispatch({
    type: GeoLocationActions.ADD_LOCALIZATION,
    payload: {
      id: 0,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      measurementTime: new Date(position.timestamp),
    },
  });
};

export const onGeolocateError = (
  error: PositionError,
  dispatch: (action: GeoLocationActionT) => void
) => {
  dispatch({
    type: GeoLocationActions.SET_ERROR,
    payload: {
      measurementTime: new Date(),
      message: getGeolocateErrorMessage(error),
    },
  });
};

export const createDataForPins = (data: GeoDataT[]) => {
  if (data.length > 1) {
    return [data[0], data[data.length - 1]];
  } else if (data.length === 1) {
    return [data[0]];
  }
  return data;
};

export const getGeolocateErrorMessage = (error: PositionError) => {
  if (error.code === error.PERMISSION_DENIED) {
    return GeoLocationErrorMessages.PERMISSION_DENIED;
  } else if (error.code === error.POSITION_UNAVAILABLE) {
    return GeoLocationErrorMessages.POSITION_UNAVAILABLE;
  }
  return GeoLocationErrorMessages.DEFAULT;
};
