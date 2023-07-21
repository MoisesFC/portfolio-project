import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejs } from 'react-icons/di';
import { FaBootstrap, FaNode, FaReact } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Loren Ipsum
    </SectionText>
    <List>
    <ListItem>
      <FaReact size="5rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience With <br />
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaNode size="5rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience With <br />
          Node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaBootstrap size="5rem"/>
      <ListContainer>
        <ListTitle>UI-UX</ListTitle>
        <ListParagraph>
          Experience With <br />
          Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>
  </Section>
);

export default Technologies;
