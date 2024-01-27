import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoute(): JSX.Element | null | '' {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    useEffect(() => {
        if (!user) navigate('/login', { replace: true });
    }, [user, navigate]);

    return user && <Outlet />;
}
