import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Room.css'
const Room = () => {
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [players, setPlayer] = useState([])
    const webSocket = useRef(null);
    useEffect(() => {
        const ws = new WebSocket(process.env.REACT_APP_WS_URL);

        const sendMessage = (type, data) => {
            const message = {
                type: type,
                data: data,
            }
            ws.send(JSON.stringify(message))
        }


        webSocket.current = {
            ws,
            sendMessage
        };

        ws.onopen = () => {
            sendMessage('player-join', {userid: user.id})
        };

        ws.onmessage = (e) => {
            setPlayer([])
            console.log(e);
        };

        ws.onerror = (e) => {
            console.error(e);
        };

        ws.onclose = (e) => {
            webSocket.current = null;
            history.push('/')
        };

        return function cleanup() {
            if (webSocket.current !== null) {
                webSocket.current.ws.close();
            }
        };
    }, [players])
    return (
        <div>

        </div>
    )
}

export default Room;
