import React, { useState } from "react";
import { Card, Image, Icon, List } from "semantic-ui-react";

function UserCard(props) {
  return (
    <Card centered>
        <Card.Header>
          <a href={props.userData.html_url}>
            <Icon size="big" name="github" />
          </a>
          {props.userData.login}
        </Card.Header>
        <Image centered size='small' src={props.userData.avatar_url} />
        <Card.Content>
            <Card.Description>
                <List>
                    <List.Item>Name: {props.userData.name}</List.Item>
                    <List.Item>Location: {props.userData.location}</List.Item>
                    <List.Item>Bio: {props.userData.bio}</List.Item>
                </List>
            </Card.Description>
        </Card.Content>
    </Card>
  );
}

export default UserCard;
