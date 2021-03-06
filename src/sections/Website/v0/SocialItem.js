import React from 'react'
import {ListGroupItem, Badge } from 'reactstrap';
const SocialItem = ({info}) => {
    return (
    <ListGroupItem disabled tag="a" >{info.link} <Badge pill>{info.name}</Badge> </ListGroupItem>
    )
}

export default SocialItem
