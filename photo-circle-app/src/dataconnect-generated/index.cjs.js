const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'picnest-527a2-service',
  location: 'us-south1'
};
exports.connectorConfig = connectorConfig;

const allEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AllEvents');
}
allEventsRef.operationName = 'AllEvents';
exports.allEventsRef = allEventsRef;

exports.allEvents = function allEvents(dc) {
  return executeQuery(allEventsRef(dc));
};

const myPhotosRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MyPhotos');
}
myPhotosRef.operationName = 'MyPhotos';
exports.myPhotosRef = myPhotosRef;

exports.myPhotos = function myPhotos(dc) {
  return executeQuery(myPhotosRef(dc));
};

const myEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MyEvents');
}
myEventsRef.operationName = 'MyEvents';
exports.myEventsRef = myEventsRef;

exports.myEvents = function myEvents(dc) {
  return executeQuery(myEventsRef(dc));
};

const createEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEvent', inputVars);
}
createEventRef.operationName = 'CreateEvent';
exports.createEventRef = createEventRef;

exports.createEvent = function createEvent(dcOrVars, vars) {
  return executeMutation(createEventRef(dcOrVars, vars));
};

const uploadPhotoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UploadPhoto', inputVars);
}
uploadPhotoRef.operationName = 'UploadPhoto';
exports.uploadPhotoRef = uploadPhotoRef;

exports.uploadPhoto = function uploadPhoto(dcOrVars, vars) {
  return executeMutation(uploadPhotoRef(dcOrVars, vars));
};
