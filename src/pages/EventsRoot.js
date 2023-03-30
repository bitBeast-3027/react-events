import EventNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

const EventsRootLayout = () => {
    return <>
        <EventNavigation />
        <main>
            <Outlet />
        </main>
    </>
}

export default EventsRootLayout;