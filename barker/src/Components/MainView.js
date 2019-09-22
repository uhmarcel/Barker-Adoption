import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import NavBar from './Main/NavBar';
import DogCard from './Main/DogCard';
import ControlPanel from './Main/ControlPanel';

export default class MainView extends Component {

    swipeRef = null;

    swipeNext = () => {
        const { setDogID } = this.props;
        this.swipeRef.next();
        setDogID();
    }

    getDogs = () => {
        const { dogs } = this.props;
        const extended = dogs.concat(dogs).concat(dogs).concat(dogs);
        return extended.concat(extended).concat(extended);
    }

    render() {
        const { moveTo } = this.props;
        return (
            <div className='p-2'> 
                <NavBar moveTo={moveTo} />
                <ReactSwipe
                    className='carousel'
                    swipeOptions={{ continuous: false }}
                    ref={r => (this.swipeRef = r)}
                >
                    {this.getDogs().map(currentDog => (
                        <div>
                            <DogCard dogData={currentDog} />
                        </div>
                    ))}
                </ReactSwipe>
                <ControlPanel 
                    decline={() => this.swipeNext()}
                    accept={() => this.swipeNext()} 
                    />
            </div>
        );
    }

}
