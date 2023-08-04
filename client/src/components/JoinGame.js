import React, { useState } from 'react';
import { useChatContext, Channel } from 'stream-chat-react';
import GameStart from './GameStart';


function JoinGame() {

  // State hook to store the username of the other player
  const [otherPlayerUsername, setOtherPlayerUsername] = useState("");
  
  // Access the userInfo object from App.js using the Stream Chat context
  const { userInfo } = useChatContext();
  
  // State hook to store the Channel object once it's created.
  const [channel, setChannel] = useState(null);

  // create a new channel with the other player (from their username)
  const createChannel = async () => {
    const response = await userInfo.queryUsers({ name: { $eq: otherPlayerUsername } });
    
    // If the user is not found, show an alert
    if (response.users.length === 0) {
      alert("User not found");
      return;
    }

    // If user is found, create a new channel between users
    const newChannel = await userInfo.channel("messaging", {
      members: [userInfo.userID, response.users[0].id],
    });

    // Start watching the new channel to receive updates.
    await newChannel.watch();

    setChannel(newChannel);
  };

  return (
    <>
      {channel ? (
        // If a channel is available, the Game starts (GameStart component)
        <Channel channel={channel}>
          <GameStart channel={channel} />
        </Channel>
      ) : (
        // If no channel is available, the form to join a game is shown.
        <div className="joinGame">
          <h4>Create Game</h4>
          <input
            placeholder="Username of the other player"
            onChange={(event) => {
              setOtherPlayerUsername(event.target.value);
            }}
          />
          <button onClick={createChannel}>Start Game</button>
        </div>
      )}
    </>
  );
}

export default JoinGame;


// <Chat userInfo={userInfo}>
// </Chat>
// This is the 'wrapper' that will need to go in the App.js file to 'wrap' the JoinGame component- allowing userInfo to be passed to it- once the login and signup sections are completed.
// import {Chat} from 'stream-chat-react'; //This import will also be required on the app.js file