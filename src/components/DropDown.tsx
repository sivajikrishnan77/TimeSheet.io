/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

type Item = {
  label: string;
  value: string;
};

type Props = {
  value: string;
  setValue: (val: string) => void;
  list: Item[];
  label?: string;
  placeholder?:string;
  icon?: string;
};

export default function DropDown({
  value,
  setValue,
  list,
  label,
  placeholder,
  icon,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginVertical: 10 }}>
      {label && <Text>{label}</Text>}

      <DropDownPicker
        open={open}
        value={value|| null}
        items={list}
        placeholder={placeholder ||'Select an item'}
        setOpen={setOpen}
        left={icon ? <DropDownPicker.Icon icon={icon} /> : undefined}
        setValue={(callback) => {
          const val = callback(value);
          setValue(val);
        }}
      />
    </View>0
  );
}