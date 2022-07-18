import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {ImBlogger} from 'react-icons/im'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="foot">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:opomeroy26@gmail.com">opomeroy26@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I look forward to connecting with you!</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/opomeroy26" rel="noreferrer"  target="_blank">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/olivia-pomeroy/" rel="noreferrer"  target="_blank">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://dev.to/opomeroy26" rel="noreferrer"  target="_blank">
          <ImBlogger size="2.5rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
