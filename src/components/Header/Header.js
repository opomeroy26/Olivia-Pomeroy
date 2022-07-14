import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {ImBlogger} from 'react-icons/im';
import {SiAdonisjs} from 'react-icons/si'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
            <SiAdonisjs size="3rem" /> <Span>Olivia Pomeroy</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#foot">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/opomeroy26" rel="noreferrer"  target="_blank">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/olivia-pomeroy/" rel="noreferrer"  target="_blank">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://dev.to/opomeroy26" rel="noreferrer"  target="_blank">
          <ImBlogger size="2.5rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
