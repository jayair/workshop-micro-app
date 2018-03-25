# workshop-micro-app
A tiny todo React app

Run the following to get started

```
$ npm start
```

Connects to the API from https://github.com/jayair/workshop-micro-api

---

## Step 1

Create a new directory.

```bash
$ mkdir micro-ui
$ cd micro-ui
```

## Step 2

Create a file called `package.json` and add the following.

```json
{
  "name": "app",
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "create-react-app": "latest"
  },
  "devDependencies": {
    "react-scripts": "latest"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

## Step 3

Let's install the packages.

```bash
$ npm install
```

## Step 4

Create a couple of directories.

```bash
$ mkdir src
$ mkdir public
```

## Step 5

Create a file in `public/index.html` and add the following.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    >
    <title>Micro App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## Step 6

Create a file in `src/index.js` and add the following.

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const api = "http://localhost:3000";

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Step 7

Create a file in `src/index.css` and add the following.

```css
html,
body {
  height: 100%;
  color: white;
  font-size: 24px;
  font-family: sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  background: linear-gradient(297.5deg, DarkOrchid, CornflowerBlue);
}
```

## Step 8

Start our client.

```bash
$ npm start
```

## Step 9

Add the following to our `App` class in `src/index.js`.

```js
state = {
  list: []
};

async componentDidMount() {
  const list = await this.request();

  this.setState({ list });
}

request = async options => {
  const res = await fetch(api, options);
  return res.json();
};
```

## Step 10

Replace our `render()` function in `src/index.js` with:

```js
render() {
  return (
    <div className="App">
      <section>
        {this.state.list.map((item, id) => (
          <p key={id}>
            {item}
          </p>
        ))}
      </section>
    </div>
  );
}
```

## Step 11

Add a couple of styles to our `src/index.css`.

```css
.App {
  padding: 15px;
  margin: 0 auto;
  max-width: 480px;
}

.App section {
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.App section p {
  margin: 0;
  padding: 15px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.App section p:before {
  content: "👉";
  padding-right: 10px;
}
.App section p:last-child {
  border-bottom: 0;
}
```

## Step 12

Handle removing todos with replacing our `render()` function in `src/index.js`.

```js
render() {
  return (
    <div className="App">
      <section>
        {this.state.list.map((item, id) => (
          <p key={id} onClick={e => this.handleClick(id)}>
            {item}
          </p>
        ))}
      </section>
    </div>
  );
}
```

## Step 13

And add the following to our `App` class in `src/index.js`.

```js
handleClick = async id => {
  const list = await this.request({
    method: "DELETE",
    body: JSON.stringify({ id })
  });

  this.setState({
    list
  });
};
```

## Step 14

Handle adding todos with replacing our `render()` function in `src/index.js`.

```js
render() {
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input
          required
          autoFocus
          type="text"
          value={this.state.text}
          placeholder="✨ New Todo"
          onChange={this.handleChange}
        />
      </form>
      <section>
        {this.state.list.map((item, id) => (
          <p key={id} onClick={e => this.handleClick(id)}>
            {item}
          </p>
        ))}
      </section>
    </div>
  );
}
```

## Step 15

Replace `state` in `src/index.js`.

```js
state = {
  text: "",
  list: []
};
```

## Step 16

Add the following to our `App` class in `src/index.js`.

```js
handleChange = event => {
  this.setState({ text: event.target.value });
};
```

## Step 17

Style the input field by adding to `src/index.css`.

```css
input {
  border: 0;
  width: 100%;
  padding: 10px;
  font-size: 24px;
  border-radius: 3px;
  color: MidnightBlue;
  box-sizing: border-box;
}
```

## Step 18

Add the following to our `App` class in `src/index.js`.

```js
handleSubmit = async event => {
  event.preventDefault();

  const list = await this.request({
    method: "PUT",
    body: JSON.stringify({ text: this.state.text })
  });

  this.setState({
    list,
    text: ""
  });
};
```

---

## Deploy Step 1

Remix this project <a href="https://glitch.com/~wolfhacks-micro-app">glitch.com/~wolfhacks-micro-app</a>.

## Deploy Step 2

Replace the `package.json`, `public/index.html`, `src/index.css`, & `src/index.js` with your local version.

## Deploy Step 3

Replace the following with the URL from your API.

```js
const api = "http://localhost:3000";
```

## Deploy Step 4

Hit **Show** and celebreate 🎉.
