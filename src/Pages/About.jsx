import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Container>
      <Section>
        <ImageSection>
          <AboutImage src="/about.png" alt="About Us" />
        </ImageSection>
        <Content>
          <Title>About Rahul Fantasy Sports App</Title>
          <Description>
            Welcome to [Your Fantasy Sports App], where we turn every sports fan into a manager! Our platform is dedicated to providing the most immersive and engaging fantasy sports experience possible.
          </Description>
          <Mission>
            <h2>Our Mission</h2>
            <p>
              Our mission is to create an inclusive and competitive environment where sports fans can showcase their knowledge and skills. We aim to bring the excitement of professional sports to your fingertips, making every game day more thrilling.
            </p>
          </Mission>
          <Team>
            <h2>Meet Our Team</h2>
            <p>
              Our team is composed of sports enthusiasts, technology experts, and customer service professionals who are passionate about delivering the best fantasy sports experience. We are committed to innovation and excellence, constantly working to improve our platform.
            </p>
          </Team>
        </Content>
      </Section>
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
`;

const Content = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Mission = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Team = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Footer = styled.footer`
  margin-top: 50px;
  text-align: center;
`;

export default AboutUs;
