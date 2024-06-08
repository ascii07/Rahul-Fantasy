// src/pages/Dashboard.js
import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  
  const user = {
    username: 'JohnDoe',
    email: 'john@example.com',
    
  };

  return (
    <Container>
      <ProfileContainer>
        <h2>Welcome, {user.username}!</h2>
        <p>Email: {user.email}</p>
        
      </ProfileContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProfileContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export default Dashboard;
