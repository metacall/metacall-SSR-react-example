const ReactDOMServer = require('react-dom/server');
const React = require('react');

const element = <h1>Hello</h1>;

const myFunc = () => ReactDOMServer.renderToString(element);