import { Outlet } from 'react-router-dom';

export function RootPage() {
    return (
        <>
            <h1>Root Page</h1>
            <Outlet />
        </>
    )
}