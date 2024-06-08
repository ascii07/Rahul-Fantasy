import React from 'react';
import styled from 'styled-components';

const TermsAndConditions = () => {
  return (
    <Container>
      <Title>Terms and Conditions</Title>
      <Section>
        <SectionTitle>Introduction</SectionTitle>
        <Paragraph>
          Welcome to [Your Fantasy Sports App]. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Account Creation</SectionTitle>
        <Paragraph>
          To use certain features of our website, you may be required to create an account. You agree to provide accurate and complete information during the registration process and to update such information as necessary to ensure it remains accurate and complete.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>User Conduct</SectionTitle>
        <Paragraph>
          You agree not to use our website and services for any unlawful purpose or in any way that could harm, disable, overburden, or impair our services. You also agree not to interfere with any other party's use and enjoyment of our services.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Intellectual Property</SectionTitle>
        <Paragraph>
          All content and materials on our website, including but not limited to text, graphics, logos, and software, are the property of [Your Fantasy Sports App] or its licensors and are protected by copyright, trademark, and other intellectual property laws.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Termination</SectionTitle>
        <Paragraph>
          We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of our services, us, or third parties, or for any other reason.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Disclaimers and Limitation of Liability</SectionTitle>
        <Paragraph>
          Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted or error-free. In no event shall [Your Fantasy Sports App] be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Governing Law</SectionTitle>
        <Paragraph>
          These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Changes to Terms and Conditions</SectionTitle>
        <Paragraph>
          We reserve the right to modify these Terms and Conditions at any time. If we make changes, we will provide notice of such changes by updating the date at the top of these Terms and Conditions. Your continued use of our services following the posting of changes constitutes your acceptance.
        </Paragraph>
      </Section>
      <Section>
       
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

export default TermsAndConditions;
