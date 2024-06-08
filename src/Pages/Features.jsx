import React from 'react';
import styled from 'styled-components';

const Features = () => {
  return (
    <Container>
      <Title>Features of Rahul Fantasy</Title>
      <FeatureSection>
        <ImageWrapper>
          <FeatureImage src="/feature1.png" alt="Build Your Dream Team" />
        </ImageWrapper>
        <FeatureContent>
          <FeatureTitle>Build Your Dream Team</FeatureTitle>
          <FeatureDescription>
            Draft your favorite players and create the ultimate fantasy lineup. Manage your team, make strategic decisions, and see your team rise to the top of the leaderboard.
          </FeatureDescription>
        </FeatureContent>
      </FeatureSection>
      <FeatureSection>
        <ImageWrapper>
          <FeatureImage src="/feature2.png" alt="Compete Against Friends" />
        </ImageWrapper>
        <FeatureContent>
          <FeatureTitle>Compete Against Friends</FeatureTitle>
          <FeatureDescription>
            Challenge your friends in private leagues or join public contests for a chance to win prizes. Show off your sports knowledge and compete to be the best.
          </FeatureDescription>
        </FeatureContent>
      </FeatureSection>
      <FeatureSection>
        <ImageWrapper>
          <FeatureImage src="/feature3.jpeg" alt="Live Scoring and Updates" />
        </ImageWrapper>
        <FeatureContent>
          <FeatureTitle>Live Scoring and Updates</FeatureTitle>
          <FeatureDescription>
            Follow every play in real-time and track your team's performance throughout the game. Stay updated with live scores, stats, and player news.
          </FeatureDescription>
        </FeatureContent>
      </FeatureSection>
      <FeatureSection>
        <ImageWrapper>
          <FeatureImage src="/feature4.png" alt="Weekly Challenges" />
        </ImageWrapper>
        <FeatureContent>
          <FeatureTitle>Weekly Challenges</FeatureTitle>
          <FeatureDescription>
            Test your skills with weekly challenges and special events. Earn rewards, climb the rankings, and prove your expertise in various sports.
          </FeatureDescription>
        </FeatureContent>
      </FeatureSection>
      <FeatureSection>
        <ImageWrapper>
          <FeatureImage src="/feature5.png" alt="Expert Analysis" />
        </ImageWrapper>
        <FeatureContent>
          <FeatureTitle>Expert Analysis</FeatureTitle>
          <FeatureDescription>
            Get insights and advice from fantasy experts to help you make informed decisions. Stay ahead of the competition with the latest tips and strategies.
          </FeatureDescription>
        </FeatureContent>
      </FeatureSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`;

const FeatureSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 200px; /* Adjusted size */
  border-radius: 8px;
`;

const FeatureContent = styled.div`
  flex: 2;
`;

const FeatureTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export default Features;
