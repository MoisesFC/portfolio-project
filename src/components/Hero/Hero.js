import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Transforming complex ideas into elegant and interactive web experiences through JavaScript and ReactJS expertise, showcasing your skills and projects with a visually captivating portfolio website.
      </SectionText>
      <Button onClick={() => window.open('https://google.com', 'blank')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;