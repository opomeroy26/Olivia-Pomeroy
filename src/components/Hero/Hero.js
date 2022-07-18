import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio!
      </SectionTitle>
      <SectionText>
      I enjoy learning new skills and building valuable, user-friendly applications. I am excited to keep growing, expanding my knowledge, and taking creative-risks to contribute my skills and experiences into building meaningful applications.
  
      </SectionText>
      <Button onClick={()=> window.location = "mailto:opomeroy26@gmail.com"}>Email Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;