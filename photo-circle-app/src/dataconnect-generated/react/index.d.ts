import { AllEventsData, MyPhotosData, MyEventsData, CreateEventData, CreateEventVariables, UploadPhotoData, UploadPhotoVariables, CreateUserData, CreateUserVariables, DeleteEventData, DeleteEventVariables, JoinEventData, JoinEventVariables, GetEventByCodeData, GetEventByCodeVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAllEvents(options?: useDataConnectQueryOptions<AllEventsData>): UseDataConnectQueryResult<AllEventsData, undefined>;
export function useAllEvents(dc: DataConnect, options?: useDataConnectQueryOptions<AllEventsData>): UseDataConnectQueryResult<AllEventsData, undefined>;

export function useMyPhotos(options?: useDataConnectQueryOptions<MyPhotosData>): UseDataConnectQueryResult<MyPhotosData, undefined>;
export function useMyPhotos(dc: DataConnect, options?: useDataConnectQueryOptions<MyPhotosData>): UseDataConnectQueryResult<MyPhotosData, undefined>;

export function useMyEvents(options?: useDataConnectQueryOptions<MyEventsData>): UseDataConnectQueryResult<MyEventsData, undefined>;
export function useMyEvents(dc: DataConnect, options?: useDataConnectQueryOptions<MyEventsData>): UseDataConnectQueryResult<MyEventsData, undefined>;

export function useCreateEvent(options?: useDataConnectMutationOptions<CreateEventData, FirebaseError, CreateEventVariables>): UseDataConnectMutationResult<CreateEventData, CreateEventVariables>;
export function useCreateEvent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEventData, FirebaseError, CreateEventVariables>): UseDataConnectMutationResult<CreateEventData, CreateEventVariables>;

export function useUploadPhoto(options?: useDataConnectMutationOptions<UploadPhotoData, FirebaseError, UploadPhotoVariables>): UseDataConnectMutationResult<UploadPhotoData, UploadPhotoVariables>;
export function useUploadPhoto(dc: DataConnect, options?: useDataConnectMutationOptions<UploadPhotoData, FirebaseError, UploadPhotoVariables>): UseDataConnectMutationResult<UploadPhotoData, UploadPhotoVariables>;

export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useDeleteEvent(options?: useDataConnectMutationOptions<DeleteEventData, FirebaseError, DeleteEventVariables>): UseDataConnectMutationResult<DeleteEventData, DeleteEventVariables>;
export function useDeleteEvent(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteEventData, FirebaseError, DeleteEventVariables>): UseDataConnectMutationResult<DeleteEventData, DeleteEventVariables>;

export function useJoinEvent(options?: useDataConnectMutationOptions<JoinEventData, FirebaseError, JoinEventVariables>): UseDataConnectMutationResult<JoinEventData, JoinEventVariables>;
export function useJoinEvent(dc: DataConnect, options?: useDataConnectMutationOptions<JoinEventData, FirebaseError, JoinEventVariables>): UseDataConnectMutationResult<JoinEventData, JoinEventVariables>;

export function useGetEventByCode(vars: GetEventByCodeVariables, options?: useDataConnectQueryOptions<GetEventByCodeData>): UseDataConnectQueryResult<GetEventByCodeData, GetEventByCodeVariables>;
export function useGetEventByCode(dc: DataConnect, vars: GetEventByCodeVariables, options?: useDataConnectQueryOptions<GetEventByCodeData>): UseDataConnectQueryResult<GetEventByCodeData, GetEventByCodeVariables>;
