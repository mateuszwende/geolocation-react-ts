import { geoLocationReducer, initialGeoLocationState } from "../reducer";
import { GeoLocationActions, GeoDataT, GeoLocationActionT } from "../types";

test(`Geolocation reducer should handle ${GeoLocationActions.ADD_LOCALIZATION}`, () => {
  const mockPayload: GeoDataT = {
    id: 0,
    latitude: 35.45,
    longitude: 45.334,
    measurementTime: new Date(),
  };

  const addLocalizationAction: GeoLocationActionT = {
    type: GeoLocationActions.ADD_LOCALIZATION,
    payload: mockPayload,
  };

  expect(
    geoLocationReducer(initialGeoLocationState, addLocalizationAction)
  ).toEqual({
    ...initialGeoLocationState,
    data: [mockPayload],
    isTracking: true,
    error: undefined,
  });
});

test(`Geolocation reducer should handle ${GeoLocationActions.CLEAR_DATA}`, () => {
  const mockPayload: GeoDataT = {
    id: 0,
    latitude: 35.45,
    longitude: 45.334,
    measurementTime: new Date(),
  };

  const addLocalizationAction: GeoLocationActionT = {
    type: GeoLocationActions.ADD_LOCALIZATION,
    payload: mockPayload,
  };

  geoLocationReducer(initialGeoLocationState, addLocalizationAction);

  const clearDataAction: GeoLocationActionT = {
    type: GeoLocationActions.CLEAR_DATA,
    payload: undefined,
  };

  expect(geoLocationReducer(initialGeoLocationState, clearDataAction)).toEqual({
    ...initialGeoLocationState,
    data: [],
  });
});

test(`Geolocation reducer should handle ${GeoLocationActions.SET_TIME_INTERVAL}`, () => {
  const mockPayload = 10000;

  const setTimeIntervalAction: GeoLocationActionT = {
    type: GeoLocationActions.SET_TIME_INTERVAL,
    payload: mockPayload,
  };

  expect(
    geoLocationReducer(initialGeoLocationState, setTimeIntervalAction)
  ).toEqual({
    ...initialGeoLocationState,
    timeInterval: mockPayload,
  });
});

test(`Geolocation reducer should handle ${GeoLocationActions.SET_IS_TRACKING}`, () => {
  const mockPayload = true;

  const setIsTrackingAction: GeoLocationActionT = {
    type: GeoLocationActions.SET_IS_TRACKING,
    payload: mockPayload,
  };

  expect(
    geoLocationReducer(initialGeoLocationState, setIsTrackingAction)
  ).toEqual({
    ...initialGeoLocationState,
    isTracking: mockPayload,
  });
});

test(`Geolocation reducer should handle ${GeoLocationActions.SET_ERROR}`, () => {
  const mockPayload = true;

  const setIsTrackingAction: GeoLocationActionT = {
    type: GeoLocationActions.SET_IS_TRACKING,
    payload: mockPayload,
  };

  expect(
    geoLocationReducer(initialGeoLocationState, setIsTrackingAction)
  ).toEqual({
    ...initialGeoLocationState,
    isTracking: mockPayload,
  });
});
