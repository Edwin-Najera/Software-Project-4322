# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useAllEvents, useMyPhotos, useMyEvents, useCreateEvent, useUploadPhoto, useCreateUser } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useAllEvents();

const { data, isPending, isSuccess, isError, error } = useMyPhotos();

const { data, isPending, isSuccess, isError, error } = useMyEvents();

const { data, isPending, isSuccess, isError, error } = useCreateEvent(createEventVars);

const { data, isPending, isSuccess, isError, error } = useUploadPhoto(uploadPhotoVars);

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { allEvents, myPhotos, myEvents, createEvent, uploadPhoto, createUser } from '@dataconnect/generated';


// Operation AllEvents: 
const { data } = await AllEvents(dataConnect);

// Operation MyPhotos: 
const { data } = await MyPhotos(dataConnect);

// Operation MyEvents: 
const { data } = await MyEvents(dataConnect);

// Operation CreateEvent:  For variables, look at type CreateEventVars in ../index.d.ts
const { data } = await CreateEvent(dataConnect, createEventVars);

// Operation UploadPhoto:  For variables, look at type UploadPhotoVars in ../index.d.ts
const { data } = await UploadPhoto(dataConnect, uploadPhotoVars);

// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);


```