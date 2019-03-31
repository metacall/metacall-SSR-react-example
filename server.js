const ReactDOMServer = require('react-dom/server');

const React = require('react');

const element = React.createElement("h1", null, "Hello");

const myFunc = element => console.log(ReactDOMServer.renderToString(element));

