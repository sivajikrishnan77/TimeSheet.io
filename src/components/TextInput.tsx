/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput} from 'react-native-paper';


type Props = {
  // label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secure?: boolean;
  keyboardType?: 'default' | 'number-pad';
  icon?: string;
};

export default function TextInputField({ value, onChangeText, 
    placeholder,secure = false,
     keyboardType = 'default',icon}: Props)
{
    return <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secure}
      keyboardType={keyboardType}
      left={icon ? <TextInput.Icon icon={icon} /> : undefined}
      style={{ marginVertical: 10 }}
    />

}