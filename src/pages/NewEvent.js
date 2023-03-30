import EventForm from "../components/EventForm";
import { json, redirect } from 'react-router-dom';

const NewEventPage = () => {

    return (
        <EventForm method="POST" />
    )
}

export default NewEventPage;

