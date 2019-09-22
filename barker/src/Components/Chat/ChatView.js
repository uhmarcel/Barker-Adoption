import React, { Component } from 'react';
import ChatNav from './ChatNav';
import Chat from './Chat';
import Matches from './Matches';

export default class ChatView extends Component {

    render() {
        return(
            <div>
                <ChatNav />
                <Matches />
            </div>
        );
    }
    
}