// Home.js
import React from 'react';
import styled from 'styled-components';

// Import your background image

const Home = () => {
  return (
    <Container>
      <ImageSection>
        <BackgroundImage src="/background.png" alt="Background Image" />
        <Overlay>
          <Headline>Welcome to Rahul Fantasy - Where Every Fan Becomes a Manager!</Headline>
        </Overlay>
      </ImageSection>
      <Content>
        <Introduction>
          Experience the thrill of managing your own fantasy sports team with [Your Fantasy Sports App]. Whether you're a die-hard football fanatic, a basketball enthusiast, or a baseball buff, we've got you covered. Join millions of fans worldwide and turn your sports knowledge into fantasy glory!
        </Introduction>
        <Features>
          <Feature>
            <h3>Build Your Dream Team</h3>
            <p>Draft your favorite players and create the ultimate fantasy lineup.</p>
          </Feature>
          <Feature>
            <h3>Compete Against Friends</h3>
            <p>Challenge your friends in private leagues or join public contests for a chance to win prizes.</p>
          </Feature>
          <Feature>
            <h3>Live Scoring and Updates</h3>
            <p>Follow every play in real-time and track your team's performance throughout the game.</p>
          </Feature>
          <Feature>
            <h3>Weekly Challenges</h3>
            <p>Test your skills with weekly challenges and special events.</p>
          </Feature>
          <Feature>
            <h3>Expert Analysis</h3>
            <p>Get insights and advice from fantasy experts to help you make informed decisions.</p>
          </Feature>
        </Features>
        <CTA>Ready to play? Sign up now and start building your fantasy dynasty!</CTA>
      </Content>
      {/* Testimonials or Reviews can be added here */}
      {/* Visuals and Navigation can also be added */}
      <Footer>
        <p>© {new Date().getFullYear()} [Rahul Fantasy Sports App]. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;
`;

const ImageSection = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const Headline = styled.h1`
  font-size: 32px;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Introduction = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Feature = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
`;

const CTA = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const Footer = styled.footer`
  margin-top: 50px;
  text-align: center;
`;

export default Home;
