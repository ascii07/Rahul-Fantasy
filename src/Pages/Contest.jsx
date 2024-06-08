import React from 'react';
import styled from 'styled-components';

const Contests = () => {
  return (
    <Container>
      <Section>
        <ImageSection>
          <ContestImage src="/images.jpg" alt="Contests" />
        </ImageSection>
        <Content>
          <Title>Contests</Title>
          <Description>
            Dive into the excitement of our fantasy sports contests! Whether you're a seasoned player or just starting, there's something for everyone. Compete against friends or join public leagues to showcase your sports knowledge and win amazing prizes.
          </Description>
          <Rules>
            <h2>Contest Rules</h2>
            <p>
              1. Create your fantasy team by drafting players within a set budget.
            </p>
            <p>
              2. Join a contest by selecting one from the available options.
            </p>
            <p>
              3. Earn points based on the real-life performance of your players.
            </p>
            <p>
              4. The team with the highest points at the end of the contest wins.
            </p>
          </Rules>
          <Participation>
            <h2>How to Participate</h2>
            <p>
              Joining a contest is easy! Simply sign up, choose a contest that interests you, and start building your team. Stay updated with live scores and track your progress in real-time.
            </p>
          </Participation>
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

const ContestImage = styled.img`
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

const Rules = styled.div`
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

const Participation = styled.div`
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

export default Contests;
