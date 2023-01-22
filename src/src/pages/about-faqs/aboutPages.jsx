import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const AboutPages = () => {

    const location = useLocation();
    const history = useHistory();

    console.log('We are in Router:', location.pathname); // Return '/About|/fags'

    const navigate = (path) => {
        history.push(path);
    }
    const goBack = ()=> {
        history.goBack();
    }
    const goForward = () => {
        history.goForward();
    }
    return (
        <div>
            <h1>
                About | FAQs 
            </h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go To Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPages;
