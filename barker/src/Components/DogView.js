import React, { Component } from 'react';
import ChatNav from './Chat/ChatNav';
import Chat from './Chat/Chat';
import Matches from './Chat/Matches';
import DogNav from './Chat/DogNav';
import ChatControlPanel from './Main/ChatControlPanel';

export default class DogView extends Component {

    render() {
        const { moveTo } = this.props;
        return(
            <div>
                <DogNav moveTo={moveTo} />
                <Chat/>
                <ChatControlPanel/>
            </div>
        );
    }
}