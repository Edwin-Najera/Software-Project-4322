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
    description?: string | null;
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
  description?: string | null;
  photoLimit?: number | null;
}

export interface Event_Key {
  id: UUIDString;
  __typename?: 'Event_Key';
}

export interface MyEventsData {
  events: ({
    id: UUIDString;
    name: string;
    eventDate: DateString;
    description?: string | null;
    photoLimit?: number | null;
    createdAt: TimestampString;
  } & Event_Key)[];
}

export interface MyPhotosData {
  photos: ({
    id: UUIDString;
    imageUrl: string;
    caption?: string | null;
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
  caption?: string | null;
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

