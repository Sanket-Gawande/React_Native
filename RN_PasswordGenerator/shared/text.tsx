/* eslint-disable react-native/no-inline-styles */
import {TextComponent, Text as _Text} from 'react-native';
import React from 'react';

export default function Text(
  props: TextComponent['props'] & {center?: boolean; semibold?: boolean},
) {
  return (
    <_Text
      {...props}
      style={[
        props.style,
        {
          color: 'white',
          fontSize: 18,
          textAlign: props.center ? 'center' : 'left',
          fontWeight: props.semibold ? '500' : '400',
        },
      ]}
    />
  );
}
