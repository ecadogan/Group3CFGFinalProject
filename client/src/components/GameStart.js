import React, { useState } from 'react';

function GameStart({ channel }) {

    // State hook to keep track of whether players have joined or not
    const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);

    // Event listener that updates the "playersJoined" state based on the watcher count.
    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2);
    });

    // If there are not yet 2 players, this message is shown
    if (!playersJoined) {
        return <div>Waiting for other player to join...</div>;
    }

    // If 2 players have joined, the game begins
    return (
        <div>Game</div>
    );
};

export default GameStart;
