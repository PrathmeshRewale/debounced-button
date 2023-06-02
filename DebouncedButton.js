import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DebouncedButton = ({ onPress, title, disabled, buttonStyle, textStyle, ...restProps }) => {
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled || false);

  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handlePress = debounce(() => {
    if (!isDebouncing && !isExecuting && !isDisabled) {
      setIsDebouncing(true);
      setIsExecuting(true);

      if (onPress && typeof onPress === 'function') {
        onPress().finally(() => {
          setIsDebouncing(false);
          setIsExecuting(false);
        });
      }
    }
  }, 0);

  const onPressHandler = () => {
    handlePress();
  };

  const buttonColor = isDisabled ? buttonStyle?.disabledButton : null;

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      disabled={isDisabled || isDebouncing}
      style={[buttonStyle?.button, buttonColor]}
      {...restProps}
    >
      <Text style={textStyle}>{isExecuting ? "Loading.." : title}</Text>
    </TouchableOpacity>
  );
};

export default DebouncedButton;
