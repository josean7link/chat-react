import React, { useState, useEffect } from 'react';
import socket from './socket';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('summary',data=>{
      console.log('summary=>',data)
    })

    socket.on('summary-top',data=>{
      console.log('summary-top=>',data)
    })


  }, []);


  
  return (
    <div className="App">
       <p>Connected: { '' + isConnected }</p>
    </div>
  );
}

export default App;