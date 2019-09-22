import React, { Component } from 'react';
import NavBar from './Main/NavBar';
import DogCard from './Main/DogCard';
import ControlPanel from './Main/ControlPanel';

export default class MainView extends Component {

    render() {
        const { moveTo } = this.props;
        return (
            <div>
                <NavBar moveTo={moveTo} />
                <DogCard />
                <ControlPanel />
            </div>
        );
    }

}