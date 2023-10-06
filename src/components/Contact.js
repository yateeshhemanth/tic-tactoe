import React from 'react';

function Contact() {
  return (
    <div style={contactContainer}>
      <div style={contactBoxEmail}>
        <h2>Email</h2>
        <p><a href="mailto:jayanthk468@gmail.com">jayanthk468@gmail.com</a></p>
      </div>
      <div style={contactBoxCall}>
        <h2>Call Me</h2>
        <p><a href="tel:+919182099143">+91-9182099143</a></p>
      </div>
      <div style={contactBoxLinkedIn}>
        <h2>LinkedIn</h2>
        <p><a href="https://www.linkedin.com/in/jayanth-kadali-419798182">LinkedIn Profile</a></p>
      </div>
      <div style={contactBoxGitHub}>
        <h2>GitHub</h2>
        <p><a href="https://github.com/jaik143">GitHub Profile</a></p>
      </div>
    </div>
  );
}

const contactContainer = {
  backgroundColor: '#222',
  color: '#551a8b',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Adjust this for desired height
};

const contactBoxEmail = {
  backgroundColor: 'aqua', // Background color for Email box
  border: '1px solid white',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  maxWidth: '300px', // Adjust this for box width
};

const contactBoxCall = {
  backgroundColor: 'aqua', // Background color for Call Me box
  border: '1px solid white',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  maxWidth: '300px', // Adjust this for box width
};

const contactBoxLinkedIn = {
  backgroundColor: 'aqua', // Background color for LinkedIn box
  border: '1px solid white',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  maxWidth: '300px', // Adjust this for box width
};

const contactBoxGitHub = {
  backgroundColor: 'aqua', // Background color for GitHub box
  border: '1px solid white',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  maxWidth: '300px', // Adjust this for box width
};

export default Contact;
