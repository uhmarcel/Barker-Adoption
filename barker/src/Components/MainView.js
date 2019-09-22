import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import NavBar from './Main/NavBar';
import DogCard from './Main/DogCard';
import ControlPanel from './Main/ControlPanel';

export default class MainView extends Component {

    swipeRef = null;

    swipeNext = () => {
        const { setDogID } = this.props;
         
    }

    render() {
        const { moveTo, dogs, dogID, setDogID } = this.props;
        return (
            <div className='p-2'> 
                <NavBar moveTo={moveTo} />
                <ReactSwipe
                    className='carousel'
                    swipeOptions={{ continuous: false }}
                    ref={r => (this.swipeRef = r)}
                >
                    {dogs.map(currentDog => (
                        <div>
                            <DogCard dogData={currentDog} />
                        </div>
                    ))}
                </ReactSwipe>
                <ControlPanel 
                    reject={() => this.swipeRef.next()}
                    accept={() => {
                        this.swipeRef.next()
                    }} 
                    />
            </div>
        );
    }

}
