import React from 'react';
import './index.css';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Center,
} from '@chakra-ui/react';

export function Graph(props) {
  console.log(props.color);
  let colors = {
    'red': '#cc5d5a',
    'lightBlue': '#3fb0d9',
    'blue': '#3876e0',
    'yellow': '#e8b54f',
  };
  return (
    <div id="graph" style={{ backgroundColor: `${colors[props.color]}` }}>
      <div id="graph-internal">
        <Stat>
          <StatNumber>{props.info}</StatNumber>
          <br />
          <Center>
            <StatNumber>{props.stat}</StatNumber>
          </Center>
          <br />
          <Center>
            <StatHelpText>{props.helpText}</StatHelpText>
          </Center>
        </Stat>
      </div>
    </div>
  );
}
