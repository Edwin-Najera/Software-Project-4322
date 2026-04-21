import { AllEventsData, MyPhotosData, CreateEventData, CreateEventVariables, UploadPhotoData, UploadPhotoVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAllEvents(options?: useDataConnectQueryOptions<AllEventsData>): UseDataConnectQueryResult<AllEventsData, undefined>;
export function useAllEvents(dc: DataConnect, options?: useDataConnectQueryOptions<AllEventsData>): UseDataConnectQueryResult<AllEventsData, undefined>;

export function useMyPhotos(options?: useDataConnectQueryOptions<MyPhotosData>): UseDataConnectQueryResult<MyPhotosData, undefined>;
export function useMyPhotos(dc: DataConnect, options?: useDataConnectQueryOptions<MyPhotosData>): UseDataConnectQueryResult<MyPhotosData, undefined>;

export function useCreateEvent(options?: useDataConnectMutationOptions<CreateEventData, FirebaseError, CreateEventVariables>): UseDataConnectMutationResult<CreateEventData, CreateEventVariables>;
export function useCreateEvent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEventData, FirebaseError, CreateEventVariables>): UseDataConnectMutationResult<CreateEventData, CreateEventVariables>;

export function useUploadPhoto(options?: useDataConnectMutationOptions<UploadPhotoData, FirebaseError, UploadPhotoVariables>): UseDataConnectMutationResult<UploadPhotoData, UploadPhotoVariables>;
export function useUploadPhoto(dc: DataConnect, options?: useDataConnectMutationOptions<UploadPhotoData, FirebaseError, UploadPhotoVariables>): UseDataConnectMutationResult<UploadPhotoData, UploadPhotoVariables>;
