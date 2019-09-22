import React, { Component } from 'react';
import ReactPlayer from 'react-player' 

class Chat extends Component {

    state = {
        video : " https://www.youtube.com/watch?v=lUybIXvIJMc" ,
        name: "Scooby",
        age: 6,
        shortBio: "Marketing Design at Tinder"
    }

    render() {
        const { imageUrl, name, age, shortBio } = this.state; 
        return (
            <div className='card'>
                <div>
                    <h1>Live Video</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=lUybIXvIJMc' playing />
                </div>
                <div className='py-1 px-2'>
                    <p className='f mb-0'><b>{name}, {age}</b></p>  
                    <p className='small mb-1'>{shortBio}</p>
                </div>
            </div>
        );
    }

}

export default Chat;
