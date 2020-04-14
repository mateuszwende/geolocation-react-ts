import {
  GeoLocationStateT,
  GeoLocationActions,
  GeoLocationActionT,
} from "./types";
import { GeoDataT } from "./types";

export const initialGeoLocationState: GeoLocationStateT = {
  data: [],
  timeInterval: 5000,
  isTracking: false,
  error: undefined,
};

export const createNextId = (data: GeoDataT[]) =>
  data.length ? data[data.length - 1].id + 1 : 0;

export const geoLocationReducer = (
  state = initialGeoLocationState,
  action: GeoLocationActionT
): GeoLocationStateT => {
  switch (action.type) {
    case GeoLocationActions.ADD_LOCALIZATION:
      return {
        ...state,
        data: [
          ...state.data,
          { ...action.payload, id: createNextId(state.data) },
        ],
        error: undefined,
        isTracking: true,
      };
    case GeoLocationActions.CLEAR_DATA:
      return { ...state, data: [] };
    case GeoLocationActions.SET_TIME_INTERVAL:
      return { ...state, timeInterval: action.payload };
    case GeoLocationActions.SET_IS_TRACKING:
      return { ...state, isTracking: action.payload };
    case GeoLocationActions.SET_ERROR:
      return { ...state, error: action.payload, isTracking: false };
    default:
      return state;
  }
};
