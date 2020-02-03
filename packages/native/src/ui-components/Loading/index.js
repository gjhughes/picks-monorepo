import React, {Fragment} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';

import styles from './styles';

function Loading() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <ActivityIndicator style={styles.loading} size="large" />
    </Fragment>
  );
}

export default Loading;
