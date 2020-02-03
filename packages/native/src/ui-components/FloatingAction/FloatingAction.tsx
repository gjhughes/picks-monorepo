import React, {useState} from 'react'
import {FAB, Portal} from 'react-native-paper'
import {NavigationParams} from 'react-navigation'

import styles from './styles'

interface OnPress {
  (params?: {}): void
}

interface Props {
  onPress: OnPress
  visible: boolean
}

const actions = (onPress: OnPress) => {
  return [
    {
      icon: 'account-group',
      label: 'Join League',
      onPress: () => onPress({screen: 'JoinLeague'})
    },
    {
      icon: 'account-multiple-plus',
      label: 'Create League',
      onPress: () => onPress({screen: 'NewLeague'})
    }
  ]
}

function FloatingAction({onPress, visible}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Portal>
      <FAB.Group
        visible={visible}
        open={isOpen}
        icon={isOpen ? 'menu' : 'plus'}
        actions={actions(onPress)}
        onPress={() => null}
        fabStyle={styles.button}
        onStateChange={({open}) => setIsOpen(open)}
      />
    </Portal>
  )
}

export default FloatingAction
