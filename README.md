# Button Component

A simple ReactJS Button component.   
Include base styles (scss).

## Install

```bush
$ npm install simple-react-button --save
```

## Usage

```js
import Button from 'simple-react-button';

onClick(arg) { }

<Button value='Click Me!' clickHandler={this.onClick.bind(this)} />
<Button value='Click Me!' clickHandler={this.onClick.bind(this, arg)} />

<Button
    type='reset'
    value='Reset'
    className='your-additional-class'
    clickHandler={this.onClick.bind(this)}
/>
```

Disable a button during a long request:

```js
onClick() {
    return new Promise(resolve => {
        // do XHR here, for example, and call resolve() in the end
    });
}

<Button value='Click Me!' clickHandler={this.onClick.bind(this)} />
```

## License

MIT
