import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AllEventsData {
  events: ({
    id: UUIDString;
    name: string;
    eventDate: DateString;
    photoLimit?: number | null;
    createdAt: TimestampString;
    owner: {
      id: UUIDString;
      displayName: string;
    } & User_Key;
  } & Event_Key)[];
}

export interface Analytic_Key {
  id: UUIDString;
  __typename?: 'Analytic_Key';
}

export interface CreateEventData {
  event_insert: Event_Key;
}

export interface CreateEventVariables {
  name: string;
  eventDate: DateString;
  photoLimit?: number | null;
  ownerId: UUIDString;
  joinCode: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
  firebaseUid: string;
}

export interface DeleteEventData {
  event_delete?: Event_Key | null;
}

export interface DeleteEventVariables {
  id: UUIDString;
}

export interface DeletePhotoData {
  photo_delete?: Photo_Key | null;
}

export interface DeletePhotoVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface DeleteUserVariables {
  id: UUIDString;
}

export interface EventMember_Key {
  eventId: UUIDString;
  userId: UUIDString;
  __typename?: 'EventMember_Key';
}

export interface EventPhotosData {
  photos: ({
    id: UUIDString;
    imageUrl: string;
    createdAt: TimestampString;
    event: {
      id: UUIDString;
      name: string;
    } & Event_Key;
  } & Photo_Key)[];
}

export interface EventPhotosVariables {
  eventId: UUIDString;
}

export interface Event_Key {
  id: UUIDString;
  __typename?: 'Event_Key';
}

export interface GetCurrentUserData {
  users: ({
    id: UUIDString;
    displayName: string;
    firebaseUid: string;
  } & User_Key)[];
}

export interface GetCurrentUserVariables {
  firebaseUid: string;
}

export interface GetEventByCodeData {
  events: ({
    id: UUIDString;
    name: string;
    eventDate: DateString;
    joinCode: string;
    owner: {
      displayName: string;
    };
  } & Event_Key)[];
}

export interface GetEventByCodeVariables {
  joinCode: string;
}

export interface GetEventData {
  events: ({
    id: UUIDString;
    name: string;
    eventDate: DateString;
    joinCode: string;
    photoLimit?: number | null;
    owner: {
      displayName: string;
    };
  } & Event_Key)[];
}

export interface GetEventVariables {
  id: UUIDString;
}

export interface JoinEventData {
  eventMember_insert: EventMember_Key;
}

export interface JoinEventVariables {
  eventId: UUIDString;
  userId: UUIDString;
}

export interface MyEventsData {
  events: ({
    id: UUIDString;
    name: string;
    eventDate: DateString;
    joinCode: string;
    createdAt: TimestampString;
  } & Event_Key)[];
}

export interface MyJoinedEventsData {
  eventMembers: ({
    event: {
      id: UUIDString;
      name: string;
      eventDate: DateString;
      owner: {
        displayName: string;
      };
    } & Event_Key;
  })[];
}

export interface MyPhotosData {
  photos: ({
    id: UUIDString;
    imageUrl: string;
    createdAt: TimestampString;
    event: {
      id: UUIDString;
      name: string;
    } & Event_Key;
  } & Photo_Key)[];
}

export interface Photo_Key {
  id: UUIDString;
  __typename?: 'Photo_Key';
}

export interface UploadPhotoData {
  photo_insert: Photo_Key;
}

export interface UploadPhotoVariables {
  eventId: UUIDString;
  imageUrl: string;
  uploaderId: UUIDString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AllEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<AllEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<AllEventsData, undefined>;
  operationName: string;
}
export const allEventsRef: AllEventsRef;

export function allEvents(): QueryPromise<AllEventsData, undefined>;
export function allEvents(dc: DataConnect): QueryPromise<AllEventsData, undefined>;

interface MyPhotosRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyPhotosData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<MyPhotosData, undefined>;
  operationName: string;
}
export const myPhotosRef: MyPhotosRef;

export function myPhotos(): QueryPromise<MyPhotosData, undefined>;
export function myPhotos(dc: DataConnect): QueryPromise<MyPhotosData, undefined>;

interface EventPhotosRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EventPhotosVariables): QueryRef<EventPhotosData, EventPhotosVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EventPhotosVariables): QueryRef<EventPhotosData, EventPhotosVariables>;
  operationName: string;
}
export const eventPhotosRef: EventPhotosRef;

export function eventPhotos(vars: EventPhotosVariables): QueryPromise<EventPhotosData, EventPhotosVariables>;
export function eventPhotos(dc: DataConnect, vars: EventPhotosVariables): QueryPromise<EventPhotosData, EventPhotosVariables>;

interface MyEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<MyEventsData, undefined>;
  operationName: string;
}
export const myEventsRef: MyEventsRef;

export function myEvents(): QueryPromise<MyEventsData, undefined>;
export function myEvents(dc: DataConnect): QueryPromise<MyEventsData, undefined>;

interface CreateEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
  operationName: string;
}
export const createEventRef: CreateEventRef;

export function createEvent(vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;
export function createEvent(dc: DataConnect, vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;

interface UploadPhotoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UploadPhotoVariables): MutationRef<UploadPhotoData, UploadPhotoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UploadPhotoVariables): MutationRef<UploadPhotoData, UploadPhotoVariables>;
  operationName: string;
}
export const uploadPhotoRef: UploadPhotoRef;

export function uploadPhoto(vars: UploadPhotoVariables): MutationPromise<UploadPhotoData, UploadPhotoVariables>;
export function uploadPhoto(dc: DataConnect, vars: UploadPhotoVariables): MutationPromise<UploadPhotoData, UploadPhotoVariables>;

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface DeleteEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEventVariables): MutationRef<DeleteEventData, DeleteEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteEventVariables): MutationRef<DeleteEventData, DeleteEventVariables>;
  operationName: string;
}
export const deleteEventRef: DeleteEventRef;

export function deleteEvent(vars: DeleteEventVariables): MutationPromise<DeleteEventData, DeleteEventVariables>;
export function deleteEvent(dc: DataConnect, vars: DeleteEventVariables): MutationPromise<DeleteEventData, DeleteEventVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;
export function deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeletePhotoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePhotoVariables): MutationRef<DeletePhotoData, DeletePhotoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePhotoVariables): MutationRef<DeletePhotoData, DeletePhotoVariables>;
  operationName: string;
}
export const deletePhotoRef: DeletePhotoRef;

export function deletePhoto(vars: DeletePhotoVariables): MutationPromise<DeletePhotoData, DeletePhotoVariables>;
export function deletePhoto(dc: DataConnect, vars: DeletePhotoVariables): MutationPromise<DeletePhotoData, DeletePhotoVariables>;

interface JoinEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinEventVariables): MutationRef<JoinEventData, JoinEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: JoinEventVariables): MutationRef<JoinEventData, JoinEventVariables>;
  operationName: string;
}
export const joinEventRef: JoinEventRef;

export function joinEvent(vars: JoinEventVariables): MutationPromise<JoinEventData, JoinEventVariables>;
export function joinEvent(dc: DataConnect, vars: JoinEventVariables): MutationPromise<JoinEventData, JoinEventVariables>;

interface GetEventByCodeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEventByCodeVariables): QueryRef<GetEventByCodeData, GetEventByCodeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEventByCodeVariables): QueryRef<GetEventByCodeData, GetEventByCodeVariables>;
  operationName: string;
}
export const getEventByCodeRef: GetEventByCodeRef;

export function getEventByCode(vars: GetEventByCodeVariables): QueryPromise<GetEventByCodeData, GetEventByCodeVariables>;
export function getEventByCode(dc: DataConnect, vars: GetEventByCodeVariables): QueryPromise<GetEventByCodeData, GetEventByCodeVariables>;

interface MyJoinedEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyJoinedEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<MyJoinedEventsData, undefined>;
  operationName: string;
}
export const myJoinedEventsRef: MyJoinedEventsRef;

export function myJoinedEvents(): QueryPromise<MyJoinedEventsData, undefined>;
export function myJoinedEvents(dc: DataConnect): QueryPromise<MyJoinedEventsData, undefined>;

interface GetCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
  operationName: string;
}
export const getCurrentUserRef: GetCurrentUserRef;

export function getCurrentUser(vars: GetCurrentUserVariables): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;
export function getCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;

interface GetEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEventVariables): QueryRef<GetEventData, GetEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEventVariables): QueryRef<GetEventData, GetEventVariables>;
  operationName: string;
}
export const getEventRef: GetEventRef;

export function getEvent(vars: GetEventVariables): QueryPromise<GetEventData, GetEventVariables>;
export function getEvent(dc: DataConnect, vars: GetEventVariables): QueryPromise<GetEventData, GetEventVariables>;

