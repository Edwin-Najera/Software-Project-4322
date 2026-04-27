import { AllEventsData, MyPhotosData, EventPhotosData, EventPhotosVariables, MyEventsData, CreateEventData, CreateEventVariables, UploadPhotoData, UploadPhotoVariables, CreateUserData, CreateUserVariables, DeleteEventData, DeleteEventVariables, DeleteUserData, DeleteUserVariables, DeletePhotoData, DeletePhotoVariables, JoinEventData, JoinEventVariables, GetEventByCodeData, GetEventByCodeVariables, MyJoinedEventsData, GetCurrentUserData, GetCurrentUserVariables, GetEventData, GetEventVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAllEvents(options?: useDataConnectQueryOptions<AllEventsData>): UseDataConnectQueryResult<AllEventsData, undefined>;
export function useAllEvents(dc: DataConnect, options?: useDataConnectQueryOptions<AllEventsData>): UseDataConnectQueryResult<AllEventsData, undefined>;

export function useMyPhotos(options?: useDataConnectQueryOptions<MyPhotosData>): UseDataConnectQueryResult<MyPhotosData, undefined>;
export function useMyPhotos(dc: DataConnect, options?: useDataConnectQueryOptions<MyPhotosData>): UseDataConnectQueryResult<MyPhotosData, undefined>;

export function useEventPhotos(vars: EventPhotosVariables, options?: useDataConnectQueryOptions<EventPhotosData>): UseDataConnectQueryResult<EventPhotosData, EventPhotosVariables>;
export function useEventPhotos(dc: DataConnect, vars: EventPhotosVariables, options?: useDataConnectQueryOptions<EventPhotosData>): UseDataConnectQueryResult<EventPhotosData, EventPhotosVariables>;

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

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, DeleteUserVariables>): UseDataConnectMutationResult<DeleteUserData, DeleteUserVariables>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, DeleteUserVariables>): UseDataConnectMutationResult<DeleteUserData, DeleteUserVariables>;

export function useDeletePhoto(options?: useDataConnectMutationOptions<DeletePhotoData, FirebaseError, DeletePhotoVariables>): UseDataConnectMutationResult<DeletePhotoData, DeletePhotoVariables>;
export function useDeletePhoto(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePhotoData, FirebaseError, DeletePhotoVariables>): UseDataConnectMutationResult<DeletePhotoData, DeletePhotoVariables>;

export function useJoinEvent(options?: useDataConnectMutationOptions<JoinEventData, FirebaseError, JoinEventVariables>): UseDataConnectMutationResult<JoinEventData, JoinEventVariables>;
export function useJoinEvent(dc: DataConnect, options?: useDataConnectMutationOptions<JoinEventData, FirebaseError, JoinEventVariables>): UseDataConnectMutationResult<JoinEventData, JoinEventVariables>;

export function useGetEventByCode(vars: GetEventByCodeVariables, options?: useDataConnectQueryOptions<GetEventByCodeData>): UseDataConnectQueryResult<GetEventByCodeData, GetEventByCodeVariables>;
export function useGetEventByCode(dc: DataConnect, vars: GetEventByCodeVariables, options?: useDataConnectQueryOptions<GetEventByCodeData>): UseDataConnectQueryResult<GetEventByCodeData, GetEventByCodeVariables>;

export function useMyJoinedEvents(options?: useDataConnectQueryOptions<MyJoinedEventsData>): UseDataConnectQueryResult<MyJoinedEventsData, undefined>;
export function useMyJoinedEvents(dc: DataConnect, options?: useDataConnectQueryOptions<MyJoinedEventsData>): UseDataConnectQueryResult<MyJoinedEventsData, undefined>;

export function useGetCurrentUser(vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;
export function useGetCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;

export function useGetEvent(vars: GetEventVariables, options?: useDataConnectQueryOptions<GetEventData>): UseDataConnectQueryResult<GetEventData, GetEventVariables>;
export function useGetEvent(dc: DataConnect, vars: GetEventVariables, options?: useDataConnectQueryOptions<GetEventData>): UseDataConnectQueryResult<GetEventData, GetEventVariables>;
