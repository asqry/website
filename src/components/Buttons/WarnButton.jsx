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
export function WarnButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="orange" onClick={() => setIsOpen(true)}>
        Warn
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Warn User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to <b>warn</b> (username)?
              <br />
              If so, please type a reason below:
              <br />
              <br />
              <Textarea placeholder="Warn Reason" size="sm" resize="none" />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="yellow" onClick={onClose} ml={3}>
                Warn
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
