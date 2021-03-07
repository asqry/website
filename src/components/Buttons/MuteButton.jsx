import React from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  Textarea,
  AlertDialogFooter,
} from '@chakra-ui/react';

import './index.css';
export function MuteButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="blue" onClick={() => setIsOpen(true)}>
        Mute
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent className="mute-body">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Mute User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to <b>mute</b> (username)?
              <br />
              If so, please type a reason below:
              <br />
              <br />
              <Textarea
                style={{ borderRadius: '7.5px' }}
                placeholder="Mute Duration"
                size="sm"
                resize="none"
              />
              <br />
              <br />
              <Textarea
                style={{ borderRadius: '7.5px' }}
                placeholder="Mute Reason"
                size="sm"
                resize="none"
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={onClose} ml={3}>
                Mute
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
