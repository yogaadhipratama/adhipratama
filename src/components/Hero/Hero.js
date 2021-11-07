import React from 'react';
import { DiWindows } from 'react-icons/di';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br/>
      My Personal Portofolio
    </SectionTitle>
    <SectionText>
      Hello, My name is Yoga Adhipratama, i am a passionate web developer who have some experience in Back-End and Front-End Programming, i have bachelor degree in Computer Science and this is my portofolio website.
    </SectionText>
    <Button onClick={() => window.location = 'https://wa.me/+6285606021029'}>Contact Me</Button>
  </LeftSection>
</Section>
);

export default Hero;