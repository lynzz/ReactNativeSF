'use strict'

import React, {
  Linking
} from 'react-native';

export function link(url) {
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url)
      }
    })
    .catch(err=> {
      console.error('An error occurred', err);
    })
}
