import React, {useState} from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';


function UserCard(props){
    const [currentUser, setCurrentUser] = useState('')

    const clickHandler = (e) => {
        e.preventDefault();
        setCurrentUser(e.target.value);
        sendCurrent();
        console.log('currentUser', currentUser);
        setCurrentUser(props.userData.login)
    }
    const sendCurrent = () => {
        props.updateUser(currentUser);
    }
    return(
        <Card >
<div>
            <Card.Header><a href={props.userData.html_url}><Icon size='big' name="github"></Icon></a>{props.userData.login}</Card.Header>
            {/* <p>ID: {props.userData.id}</p> */}
            
</div>
        <Image src={props.userData.avatar_url}/>
        <Button compact onClick={clickHandler}>View Followers</Button>
        </Card>
    )
}

export default UserCard;