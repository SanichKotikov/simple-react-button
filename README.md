# Button Component

A simple ReactJS Button component.

```js
onClick(...args) {
    // return a Promise if you want to disable your Button (resolve enable it back)
}

render() {
    return (
        <Button value='Click Me!' clickHandler={this.onClick.bind(this, ...args)} />
    );
}
```
