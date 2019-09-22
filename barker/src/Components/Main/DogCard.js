import React, { Component } from 'react';

class DogCard extends Component {

    state = {
        imageUrl: "https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Scooby",
        age: 6,
        shortBio: "Marketing Design at Tinder"
    }

    render() {
        const { imageUrl, name, age, shortBio } = this.state; 
        return (
            <div className='card'>
                <div>
                    <img src={imageUrl} style={{width: '100%'}}/>
                </div>
                <div className='py-1 px-2'>
                    <p className='f mb-0'><b>{name}, {age}</b></p>  
                    <p className='small mb-1'>{shortBio}</p>
                </div>
            </div>
        );
    }

}

export default DogCard;
