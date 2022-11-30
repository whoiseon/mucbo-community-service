import React, {ChangeEvent} from 'react';
import {useCallback, useState} from "react";

type useInputProps = [string, (e: ChangeEvent<HTMLInputElement>) => void];

export default (initialValue: string): useInputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
};
