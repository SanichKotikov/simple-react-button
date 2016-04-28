# Button Component

A simple ReactJS Button component.   
Include base styles in `styles.scss` (import separately).

## Install

```bush
$ npm install simple-react-button --save
```

## Usage

```js
import Button from 'simple-react-button';

onClick() { }

<Button value='Click Me!' clickHandler={this.onClick.bind(this)} />
```

More [examples](https://github.com/cdrpro/simple-react-button/tree/master/examples#examples).

## Props

* type: (`button`, `submit`, `reset`). Default is `button`.
* className: (string) additional className.
* disabled: (bool) disabled attribute.
* value: (required, string) initial value of the button.
* clickHandler: (required) function to be called when the button is clicked.

## License

MIT
