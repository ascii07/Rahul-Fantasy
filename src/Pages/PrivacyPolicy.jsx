import React from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Section>
        <SectionTitle>Introduction</SectionTitle>
        <Paragraph>
          Welcome to [Your Fantasy Sports App]. Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Information We Collect</SectionTitle>
        <Paragraph>
          We collect information that you provide directly to us, such as when you create or modify your account, participate in any interactive features of the services, subscribe to a newsletter, or otherwise communicate with us. This may include:
        </Paragraph>
        <List>
          <ListItem>Personal Identification Information (Name, email address, phone number, etc.)</ListItem>
          <ListItem>Account Information (Username, password, etc.)</ListItem>
          <ListItem>Usage Data (Pages visited, links clicked, etc.)</ListItem>
          <ListItem>Device Information (IP address, browser type, etc.)</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>How We Use Information</SectionTitle>
        <Paragraph>We use the information we collect for the following purposes:</Paragraph>
        <List>
          <ListItem>To provide, maintain, and improve our services.</ListItem>
          <ListItem>To manage your account and provide customer support.</ListItem>
          <ListItem>To send you technical notices, updates, security alerts, and support messages.</ListItem>
          <ListItem>To monitor and analyze trends, usage, and activities in connection with our services.</ListItem>
          <ListItem>To personalize and improve the services and provide advertisements, content, or features that match user profiles or interests.</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>How We Share Information</SectionTitle>
        <Paragraph>
          We do not share or sell your personal information with third parties, except as described in this Privacy Policy. We may share information with:
        </Paragraph>
        <List>
          <ListItem>Service providers who need access to such information to carry out work on our behalf.</ListItem>
          <ListItem>Compliance with laws, to protect our rights, and in response to lawful requests from public authorities.</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>Your Choices</SectionTitle>
        <Paragraph>You have the following choices regarding your information:</Paragraph>
        <List>
          <ListItem>Update or correct your account information at any time.</ListItem>
          <ListItem>Opt-out of receiving promotional communications from us by following the instructions in those communications.</ListItem>
          <ListItem>Delete your account by contacting customer support.</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>Data Security</SectionTitle>
        <Paragraph>
          We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Changes to the Privacy Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
        </Paragraph>
      </Section>
 
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default PrivacyPolicy;
