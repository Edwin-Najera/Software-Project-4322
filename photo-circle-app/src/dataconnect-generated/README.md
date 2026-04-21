# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*AllEvents*](#allevents)
  - [*MyPhotos*](#myphotos)
- [**Mutations**](#mutations)
  - [*CreateEvent*](#createevent)
  - [*UploadPhoto*](#uploadphoto)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## AllEvents
You can execute the `AllEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
allEvents(): QueryPromise<AllEventsData, undefined>;

interface AllEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<AllEventsData, undefined>;
}
export const allEventsRef: AllEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
allEvents(dc: DataConnect): QueryPromise<AllEventsData, undefined>;

interface AllEventsRef {
  ...
  (dc: DataConnect): QueryRef<AllEventsData, undefined>;
}
export const allEventsRef: AllEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the allEventsRef:
```typescript
const name = allEventsRef.operationName;
console.log(name);
```

### Variables
The `AllEvents` query has no variables.
### Return Type
Recall that executing the `AllEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AllEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `AllEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, allEvents } from '@dataconnect/generated';


// Call the `allEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await allEvents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await allEvents(dataConnect);

console.log(data.events);

// Or, you can use the `Promise` API.
allEvents().then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

### Using `AllEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, allEventsRef } from '@dataconnect/generated';


// Call the `allEventsRef()` function to get a reference to the query.
const ref = allEventsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = allEventsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.events);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

## MyPhotos
You can execute the `MyPhotos` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
myPhotos(): QueryPromise<MyPhotosData, undefined>;

interface MyPhotosRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyPhotosData, undefined>;
}
export const myPhotosRef: MyPhotosRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
myPhotos(dc: DataConnect): QueryPromise<MyPhotosData, undefined>;

interface MyPhotosRef {
  ...
  (dc: DataConnect): QueryRef<MyPhotosData, undefined>;
}
export const myPhotosRef: MyPhotosRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the myPhotosRef:
```typescript
const name = myPhotosRef.operationName;
console.log(name);
```

### Variables
The `MyPhotos` query has no variables.
### Return Type
Recall that executing the `MyPhotos` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MyPhotosData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `MyPhotos`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, myPhotos } from '@dataconnect/generated';


// Call the `myPhotos()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await myPhotos();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await myPhotos(dataConnect);

console.log(data.photos);

// Or, you can use the `Promise` API.
myPhotos().then((response) => {
  const data = response.data;
  console.log(data.photos);
});
```

### Using `MyPhotos`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, myPhotosRef } from '@dataconnect/generated';


// Call the `myPhotosRef()` function to get a reference to the query.
const ref = myPhotosRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = myPhotosRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.photos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.photos);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateEvent
You can execute the `CreateEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createEvent(vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;

interface CreateEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
}
export const createEventRef: CreateEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEvent(dc: DataConnect, vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;

interface CreateEventRef {
  ...
  (dc: DataConnect, vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
}
export const createEventRef: CreateEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEventRef:
```typescript
const name = createEventRef.operationName;
console.log(name);
```

### Variables
The `CreateEvent` mutation requires an argument of type `CreateEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateEventVariables {
  name: string;
  eventDate: DateString;
  description?: string | null;
  photoLimit?: number | null;
}
```
### Return Type
Recall that executing the `CreateEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEventData {
  event_insert: Event_Key;
}
```
### Using `CreateEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEvent, CreateEventVariables } from '@dataconnect/generated';

// The `CreateEvent` mutation requires an argument of type `CreateEventVariables`:
const createEventVars: CreateEventVariables = {
  name: ..., 
  eventDate: ..., 
  description: ..., // optional
  photoLimit: ..., // optional
};

// Call the `createEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEvent(createEventVars);
// Variables can be defined inline as well.
const { data } = await createEvent({ name: ..., eventDate: ..., description: ..., photoLimit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEvent(dataConnect, createEventVars);

console.log(data.event_insert);

// Or, you can use the `Promise` API.
createEvent(createEventVars).then((response) => {
  const data = response.data;
  console.log(data.event_insert);
});
```

### Using `CreateEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEventRef, CreateEventVariables } from '@dataconnect/generated';

// The `CreateEvent` mutation requires an argument of type `CreateEventVariables`:
const createEventVars: CreateEventVariables = {
  name: ..., 
  eventDate: ..., 
  description: ..., // optional
  photoLimit: ..., // optional
};

// Call the `createEventRef()` function to get a reference to the mutation.
const ref = createEventRef(createEventVars);
// Variables can be defined inline as well.
const ref = createEventRef({ name: ..., eventDate: ..., description: ..., photoLimit: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEventRef(dataConnect, createEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.event_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.event_insert);
});
```

## UploadPhoto
You can execute the `UploadPhoto` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
uploadPhoto(vars: UploadPhotoVariables): MutationPromise<UploadPhotoData, UploadPhotoVariables>;

interface UploadPhotoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UploadPhotoVariables): MutationRef<UploadPhotoData, UploadPhotoVariables>;
}
export const uploadPhotoRef: UploadPhotoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
uploadPhoto(dc: DataConnect, vars: UploadPhotoVariables): MutationPromise<UploadPhotoData, UploadPhotoVariables>;

interface UploadPhotoRef {
  ...
  (dc: DataConnect, vars: UploadPhotoVariables): MutationRef<UploadPhotoData, UploadPhotoVariables>;
}
export const uploadPhotoRef: UploadPhotoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the uploadPhotoRef:
```typescript
const name = uploadPhotoRef.operationName;
console.log(name);
```

### Variables
The `UploadPhoto` mutation requires an argument of type `UploadPhotoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UploadPhotoVariables {
  eventId: UUIDString;
  imageUrl: string;
  caption?: string | null;
}
```
### Return Type
Recall that executing the `UploadPhoto` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UploadPhotoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UploadPhotoData {
  photo_insert: Photo_Key;
}
```
### Using `UploadPhoto`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, uploadPhoto, UploadPhotoVariables } from '@dataconnect/generated';

// The `UploadPhoto` mutation requires an argument of type `UploadPhotoVariables`:
const uploadPhotoVars: UploadPhotoVariables = {
  eventId: ..., 
  imageUrl: ..., 
  caption: ..., // optional
};

// Call the `uploadPhoto()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await uploadPhoto(uploadPhotoVars);
// Variables can be defined inline as well.
const { data } = await uploadPhoto({ eventId: ..., imageUrl: ..., caption: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await uploadPhoto(dataConnect, uploadPhotoVars);

console.log(data.photo_insert);

// Or, you can use the `Promise` API.
uploadPhoto(uploadPhotoVars).then((response) => {
  const data = response.data;
  console.log(data.photo_insert);
});
```

### Using `UploadPhoto`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, uploadPhotoRef, UploadPhotoVariables } from '@dataconnect/generated';

// The `UploadPhoto` mutation requires an argument of type `UploadPhotoVariables`:
const uploadPhotoVars: UploadPhotoVariables = {
  eventId: ..., 
  imageUrl: ..., 
  caption: ..., // optional
};

// Call the `uploadPhotoRef()` function to get a reference to the mutation.
const ref = uploadPhotoRef(uploadPhotoVars);
// Variables can be defined inline as well.
const ref = uploadPhotoRef({ eventId: ..., imageUrl: ..., caption: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = uploadPhotoRef(dataConnect, uploadPhotoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.photo_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.photo_insert);
});
```

