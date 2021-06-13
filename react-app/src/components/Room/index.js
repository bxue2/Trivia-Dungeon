import React, {useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';

import './Room.css'

let socket;
const Room = () => {
    const history = useHistory();
    // use state for controlled form input
    const [chatInput, setChatInput] = useState("");
    const user = useSelector(state => state.session.user);
    const [players, setPlayers] = useState([])
    const [scores, setScores] = useState([])
    const [messages, setMessages] = useState([])
    useEffect(() => {

        // create websocket/connect
        socket = io();

        socket.on('player', (newPlayer) => {
            setPlayers([...players, newPlayer])
        })

        // listen for chat events
        socket.on("chat", (chat) => {
            // when we recieve a chat, add it into our messages array in state
            setMessages(messages => [...messages, chat])
        })

        socket.on('score', (updatedScore) => {
            setScores(scores => [...updatedScore])
        })

        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };


    const sendChat = (e) => {
        e.preventDefault()
        // emit a message
        socket.emit("chat", { user: user.username, msg: chatInput });
        // clear the input field after the message is sent
        setChatInput("")
    }

    return (
        <div className='room-page'>
            <div className='main-container'>
                <div className='user-list'>
                    {user.username}
                </div>
                <div className='trivia-box'>
                    Trivia
                </div>
                <div className='message-box'>
                    <div className='message-log'>
                        {messages.map((message, ind) => (
                            <div key={ind}>{`${message.user}: ${message.msg}`}</div>
                        ))}
                    </div>
                    <form onSubmit={sendChat}>
                        <input
                            value={chatInput}
                            onChange={updateChatInput}
                    />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Room;
