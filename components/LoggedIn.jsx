import React, { useState, useEffect } from 'react';

function getCookie(name) {
    const token = document.cookie.includes('token=') 
        ? document.cookie.split('token=')[1].split(';')[0] 
        : null;
    return token;
}

function LoggedIn () {
    const [tokenExist, setTokenExist] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            console.log('Token exists:', token);
            setTokenExist(true);
        } else {
            console.log('Token does not exist');
            setTokenExist(false);
        }
    }, []
    );
        
    return (
        <div> 
        {tokenExist ? <p>logged in</p> : <p>not logged in</p>}
        </div>
    )

}

export default LoggedIn