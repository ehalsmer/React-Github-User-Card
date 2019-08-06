import React from 'react';

function UserCard(props){
    return(
        <h1>{props.userData.login}</h1>
    )
}

export default UserCard;