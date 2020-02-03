import React from 'react'
import {Dialog, Portal, Button, Text} from 'react-native-paper'

interface Props {
  visible: boolean
  onClose(): void
  onCopyCode(): void
  title: string
  code: string
}

function UIDialog({visible, onClose, title, code, onCopyCode}: Props) {
  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text>Access Code: {code}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCopyCode}>Copy</Button>
          <Button onPress={onClose}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default UIDialog
