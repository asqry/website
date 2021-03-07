import React from 'react';
import { getUserDetails } from '../../utils/api';
import './index.css';
import { Stat, StatNumber, Button, HStack } from '@chakra-ui/react';

export function LoggedIn({ user }) {
  return (
    <div id="loggedInContainer">
      <Stat>
        <StatNumber>
          <HStack id="loggedIn-inner">
            <img src={user.avatarURL} />
            <h2>{user.discriminator}</h2>
            {'\u200b       \u200b'}
            <Button
              id="logout-button"
              colorScheme="red"
              height="7"
              variant="outline"
            >
              Log Out
            </Button>
          </HStack>
        </StatNumber>
        <br />
      </Stat>
    </div>
  );
}
