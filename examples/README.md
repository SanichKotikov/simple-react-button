# Examples

## Install & Run

```bush
$ npm install
$ npm run dev
```

Then open `index.html` in your browser.

### More examples:

```js
import Button from 'simple-react-button';
import 'simple-react-button/styles.scss';

onClick(arg) { }

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

Using ES7 Function Bind Syntax.

```js
<Button value='Click Me!' clickHandler={::this.onLongClick} />
```
