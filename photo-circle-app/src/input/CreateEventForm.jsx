import { useCreateEvent, useUploadPhoto } from "../dataconnect-generated/react"

function CreateEventForm() {
    const {mutate: createEvent, isLoading, isError} = useCreateEvent();

    async function handlesubmit(e) {
        e.preventDefault()
        const form = e.target;

        await createEvent ({
            name: form.name.value,
            eventDate: form.eventDate.value,
            description: form.description.value,
            photoLimit: 100,
        }, {
            onSuccess: () => console.log("Event created!"),
            onError: (err) => console.error(err),
        })
    }
    
  return (
    <form onSubmit={handlesubmit}>
        <input name="name" placeholder="Enter Name" required/>
        <input name="eventDate" placeholder="Enter Date" required/>
        <input name="description" placeholder="Enter Description" />
        <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Event"}
        </button>
        {isError && <p>Failed to create event</p>}
    </form>
  )
}

export default CreateEventForm