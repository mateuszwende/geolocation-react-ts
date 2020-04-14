export type PinT = {
  latitude: number;
  longitude: number;
  color: string;
};

export type GeoDataT = {
  id: number;
  latitude: number;
  longitude: number;
  measurementTime: Date;
};

export type GeoErrorT = {
  measurementTime: Date;
  message: string;
};

export type GeoLocationStateT = {
  data: GeoDataT[];
  timeInterval: number;
  isTracking: boolean;
  error?: GeoErrorT;
};

export enum GeoLocationActions {
  ADD_LOCALIZATION = "ADD_LOCALIZATION",
  CLEAR_DATA = "CLEAR_DATA",
  SET_TIME_INTERVAL = "SET_TIME_INTERVAL",
  SET_IS_TRACKING = "SET_IS_TRACKING",
  SET_IS_AVAILABLE = "SET_IS_AVAILABLE",
  SET_ERROR = "SET_ERROR",
}

export type GeoLocationActionT =
  | {
      type: GeoLocationActions.ADD_LOCALIZATION;
      payload: GeoDataT;
    }
  | {
      type: GeoLocationActions.CLEAR_DATA;
      payload: undefined;
    }
  | {
      type: GeoLocationActions.SET_TIME_INTERVAL;
      payload: number;
    }
  | {
      type: GeoLocationActions.SET_IS_TRACKING;
      payload: boolean;
    }
  | {
      type: GeoLocationActions.SET_ERROR;
      payload: GeoErrorT | undefined;
    };

export enum GeoLocationErrorMessages {
  PERMISSION_DENIED = "We are unable to get your current geolocation. If an error caused it, try allowing the browser to track your location.",
  POSITION_UNAVAILABLE = "We are unable to get your current geolocation.If an error caused it, try turning on GPS in your device and getting closer to a window to try again",
  BROWSER_NO_SUPPORT = "Your browser does not support Geolocation. Please update the browser or use a different one.",
  DEFAULT = "An unexpected error occuried",
}
