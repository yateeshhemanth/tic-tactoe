import React from 'react';

function Home() {
  const boxColors = ['aqua', 'yellow', 'green']; // Define an array of background colors

  return (
    <div style={homeContainer}>
      <div style={{ ...homeBox, backgroundColor: boxColors[0] }}>
        <h2>Welcome to the Game</h2>
      </div>
      <div style={{ ...homeBox, backgroundColor: boxColors[2] }}>
        <h3>
        A Tic-Tac-Toe game is a simple two-player game played on a grid of 3x3 cells. The goal of the game is to be the first player to get three of their marks (either "X" or "O") in a row, column, or diagonal.
        </h3>
      </div>
    </div>
  );
}

const homeContainer = {
  backgroundColor: '#222',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Adjust this for desired height
};

const homeBox = {
  border: '1px solid white',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  maxWidth: '600px', // Adjust this for box width
};

export default Home;
