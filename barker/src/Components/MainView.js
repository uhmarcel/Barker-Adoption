import React, { Component } from 'react';
<<<<<<< HEAD
import ReactSwipe from 'react-swipe';
import NavBar from './Main/NavBar';
import DogCard from './Main/DogCard';
import ControlPanel from './Main/ControlPanel';
=======
import NavBar from './Main/NavBar';
import DogCard from './Main/DogCard';
import ControlPanel from './Main/ControlPanel';

>>>>>>> e0c2339f8452d77634f2543c55afc1ad8eebb399

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
<<<<<<< HEAD
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
=======
                <DogCard />
                <ControlPanel />
>>>>>>> e0c2339f8452d77634f2543c55afc1ad8eebb399
            </div>
        );
    }

}
