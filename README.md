# Button Component

A simple ReactJS Button component.

## Install

```bush
$ npm install simple-react-button --save
```

## Usage

```js
import React, { useCallback } from 'react';
import Button from 'simple-react-button';

const YourComponent = () => {
  const onTestClick = useCallback((event) => {
    return fetch().then(doSomething);
  }, []);

  return (
    <div>
      <Button onClick={onTestClick}>
        Button text
      </Button>
    </div>
  );
};

export default YourComponent;

```

## Props

```ts
interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick: <T>(event: React.MouseEvent<HTMLButtonElement>) => void | Promise<T>;
}
```

## License

MIT
