import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;
// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor:`rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}
// Login, Logout Buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}


// ? (Expesión true) && expresión => se renderiza la expesión.
// ? (Expesión false) && expresión => no se renderiza la expesión.


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages,setNMessages] = useState(0);

    //const updateAccess = () => {
       // setAccess(!access);
    //}
    const loginAction = () => {
       setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
     }
    let optionalButton; 
    //if (access){
        //optionalButton = <button onClick={updateAccess}>Logout</button>
    //}else{
        //optionalButton = <button onClick={updateAccess}>Login</button>
    //}

    if (access){
        optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }
    return (
        <div>
            {/*Optional Button*/}
            { optionalButton } 
            {/*N Messages unread*/}
            {/*{nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new Messages</p>}
            {nMessages > 1 && <p>You have {nMessages} new Messages</p>}
            {nMessages === 0 && <p>There are no new Messages</p>}*/}
            {/*Ternary Operator*/}
            {access ? (
                <div>
                {nMessages > 0 ? 
                <p>You have {nMessages} new Messages{nMessages > 1 ? 's': null}</p> : 
                <p>There are no new Messages</p>
            }
            <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message': 'add new Message'}</button>
                </div>): null}
        </div>
    );
}

export default OptionalRender;
