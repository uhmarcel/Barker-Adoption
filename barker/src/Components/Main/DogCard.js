import React, { Component } from 'react';

export default class DogCard extends Component {

    state = {
        imageUrl: "https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Scooby",
        age: 6,
        shortBio: "Marketing Design at Tinder"
    }

    render() {
        const { imageUrl, name, age, breed, location } = this.props.dogData;
        return (
            <div className='card'>
                <div className='justify-items-center' style={imgContainer}>
                    <img src={imageUrl} style={imgStyles}/>
                </div>
                <div className='py-1 px-2'>
                    <p className='mb-0'><b>{name}, {age}</b></p>  
                    <p className='small mb-1'>{breed + ', at ' + location}</p>
                </div>
            </div>
        );
    }

}

const imgContainer = {
    height: '60vh',
    maxWidth: '100vw',
    overflow: 'hidden',
    textAlign: 'center'
}

const imgStyles = {
    display: 'inline-block',
    height: '100%'
}