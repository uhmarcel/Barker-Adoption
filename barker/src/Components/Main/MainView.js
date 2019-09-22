import React, { Component } from 'react';
import NavBar from './NavBar';
import DogCard from './DogCard';
import ControlPanel from './ControlPanel';

export default class MainView extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <DogCard />
                <ControlPanel />
            </div>
        );
    }

}