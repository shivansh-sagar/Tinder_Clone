import React, { useState } from 'react'
import TinderCard from "react-tinder-card"

import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
            name: 'Jeff Bezos',
            url: "https://media.istockphoto.com/photos/bighorn-sheep-ram-walking-directly-at-camera-picture-id1359043366",
        },
        {
            name: 'lembo',
            url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        },
        {
            name: 'eminem',
            url: "https://media.istockphoto.com/photos/bighorn-sheep-ram-walking-directly-at-camera-picture-id1359043366",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        // setLastDirectin(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };


    return (
        <div className='tinderCards'>
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
