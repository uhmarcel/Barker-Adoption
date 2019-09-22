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
                {this.props.matches.map((e, key) => {
                    return (
                        <Matches key={(e*key)} dog={this.props.data.dogs[e]} moveTo={moveTo} />
                    )
                })}
                {/* <Chat/> */}
            </div>
        );
    }
}