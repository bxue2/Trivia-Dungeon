import React, {useEffect, useRef} from 'react'

const Room = () => {
    const [players, setPlayer] = useState([])
    const webSocket = useRef(null);
    useEffect(() => {
        const ws = new WebSocket(process.env.REACT_APP_WS_URL);

        webSocket.current = {
            ws,
        };
    }, [players])
    // new WebSocket(url, protocols);
    return (
        <div>

        </div>
    )
}

export default Room;
