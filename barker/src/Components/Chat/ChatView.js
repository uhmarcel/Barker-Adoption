import React, { Component } from 'react';
import ChatNav from './ChatNav';
import Chat from './Chat';
import Matches from './Matches';

export default class ChatView extends Component {

    render() {
        const { moveTo } = this.props;
        return(
            <div>
                <ChatNav moveTo={moveTo} />
                <Matches />
            </div>
        );
    }
}