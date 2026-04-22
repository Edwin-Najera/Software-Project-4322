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

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const deleteEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEvent', inputVars);
}
deleteEventRef.operationName = 'DeleteEvent';
exports.deleteEventRef = deleteEventRef;

exports.deleteEvent = function deleteEvent(dcOrVars, vars) {
  return executeMutation(deleteEventRef(dcOrVars, vars));
};

const deleteUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUser', inputVars);
}
deleteUserRef.operationName = 'DeleteUser';
exports.deleteUserRef = deleteUserRef;

exports.deleteUser = function deleteUser(dcOrVars, vars) {
  return executeMutation(deleteUserRef(dcOrVars, vars));
};

const joinEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinEvent', inputVars);
}
joinEventRef.operationName = 'JoinEvent';
exports.joinEventRef = joinEventRef;

exports.joinEvent = function joinEvent(dcOrVars, vars) {
  return executeMutation(joinEventRef(dcOrVars, vars));
};

const getEventByCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEventByCode', inputVars);
}
getEventByCodeRef.operationName = 'GetEventByCode';
exports.getEventByCodeRef = getEventByCodeRef;

exports.getEventByCode = function getEventByCode(dcOrVars, vars) {
  return executeQuery(getEventByCodeRef(dcOrVars, vars));
};

const myJoinedEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MyJoinedEvents');
}
myJoinedEventsRef.operationName = 'MyJoinedEvents';
exports.myJoinedEventsRef = myJoinedEventsRef;

exports.myJoinedEvents = function myJoinedEvents(dc) {
  return executeQuery(myJoinedEventsRef(dc));
};

const getCurrentUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCurrentUser', inputVars);
}
getCurrentUserRef.operationName = 'GetCurrentUser';
exports.getCurrentUserRef = getCurrentUserRef;

exports.getCurrentUser = function getCurrentUser(dcOrVars, vars) {
  return executeQuery(getCurrentUserRef(dcOrVars, vars));
};
