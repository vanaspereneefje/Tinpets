import React, { useState, useEffect } from 'react';

function getCookie(name) {
    const token = document.cookie.includes('token=') 
        ? document.cookie.split('token=')[1].split(';')[0] 
        : null;
    return token;
}

function LoggedIn () {
    const [sessionExist, setSessionExist] = useState(false);

    useEffect(() => {
        const session = getCookie('connect.sid');
        if (session) {
            console.log('Session exists:', session);
            setSessionExist(true);
        } else {
            console.log('Session does not exist');
            setSessionExist(false);
        }
    }, []
    );
        
    return (
        <div> 
        {sessionExist ? <p>logged in</p> : <p>not logged in</p>}
        </div>
    )

}

export default LoggedIn