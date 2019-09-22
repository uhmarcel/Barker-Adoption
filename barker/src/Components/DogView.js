import React, { Component } from 'react';
import ChatNav from './Chat/ChatNav';
import Chat from './Chat/Chat';
import Matches from './Chat/Matches';

export default class ChatView extends Component {

    render() {
        const { moveTo } = this.props;
        return(
            <div>
                <ChatNav moveTo={moveTo} />
                <Matches />
                <Chat/>
            </div>
        );
    }
}