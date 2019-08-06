import React, { useState } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

function UserCard(props) {
  return (
    <Card centered>
        <Card.Header>
          <a href={props.userData.html_url}>
            <Icon size="big" name="github" />
          </a>
          {props.userData.login}
        </Card.Header>
        {/* <p>ID: {props.userData.id}</p> */}
      <Image src={props.userData.avatar_url} />
      {/* <Button compact onClick={clickHandler}>View Followers</Button> */}
    </Card>
  );
}

export default UserCard;
