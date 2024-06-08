// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/PrivacyPolicy">Privacy Policy</FooterLink>
        <FooterLink to="/Terms_and_Conditions">Terms and Conditions</FooterLink>
        <FooterLink to="/fantasy-points">Fantasy Points</FooterLink>
        <DownloadButton href="YOUR_APK_FILE_URL" download>
          Download App
        </DownloadButton>
      </FooterLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Footer;
