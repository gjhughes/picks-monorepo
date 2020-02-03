import React from 'react'
import {Subheading} from 'react-native-paper'

import styles from './styles'

interface Props {
  title: string
}

const HeaderTitle = ({title}: Props) => {
  return <Subheading style={styles.title}>{title}</Subheading>
}

export default HeaderTitle
