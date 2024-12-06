import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function getCookie(name) {
    const token = document.cookie.includes('token=') 
        ? document.cookie.split('token=')[1].split(';')[0] 
        : null;
    return token;
}

function LoggedIn ({ children }) {
    const [sessionExist, setSessionExist] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const session = getCookie('connect.sid');
        if (session) {
            console.log('Session exists:', session);
            setSessionExist(true);
        } else {
            console.log('Session does not exist');
            setSessionExist(false);
            navigate('/login');
        }
    }, [navigate]
    );

    if (!sessionExist) {
        return null;
    }
    
    return (
        <div> 
            {children}
        </div>
    )

}

export default LoggedIn