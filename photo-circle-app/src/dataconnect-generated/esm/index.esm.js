import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'picnest-527a2-service',
  location: 'us-south1'
};

export const allEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AllEvents');
}
allEventsRef.operationName = 'AllEvents';

export function allEvents(dc) {
  return executeQuery(allEventsRef(dc));
}

export const myPhotosRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MyPhotos');
}
myPhotosRef.operationName = 'MyPhotos';

export function myPhotos(dc) {
  return executeQuery(myPhotosRef(dc));
}

export const createEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEvent', inputVars);
}
createEventRef.operationName = 'CreateEvent';

export function createEvent(dcOrVars, vars) {
  return executeMutation(createEventRef(dcOrVars, vars));
}

export const uploadPhotoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UploadPhoto', inputVars);
}
uploadPhotoRef.operationName = 'UploadPhoto';

export function uploadPhoto(dcOrVars, vars) {
  return executeMutation(uploadPhotoRef(dcOrVars, vars));
}

