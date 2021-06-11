import React, {useEffect, useRef} from 'react'
import { useSelector } from 'react-redux';
const Room = () => {
    const user = useSelector(state => state.session.user);
    const [players, setPlayer] = useState([])
    const webSocket = useRef(null);
    useEffect(() => {
        const ws = new WebSocket(process.env.REACT_APP_WS_URL);

        webSocket.current = {
            ws,
        };

        ws.onopen = () => {
            const message = {
                type: 'player-join',
                data:{
                    userid: user.id,
                }
            }
            ws.send(JSON.stringify(message));
        };

        ws.onmessage = (e) => {
            console.log(e);
        };

        ws.onerror = (e) => {
            console.error(e);
        };

        ws.onclose = (e) => {
            console.log(e);
            const message = {
                type: 'player-leave',
                data:{
                    userid: user.id,
                }
            }
            ws.send(JSON.stringify(message));
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
