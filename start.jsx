var ReactDOM = require('react-dom');
var React = require('react');

var MainViewController = require('./app/screens/controller/main-view-controller');
var MainViewStore = require('./app/screens/store/mainViewStore');
var MainViewAction = require('./app/screens/action/mainAction');

 // ReactDOM.render(<MainViewController action={MainViewAction} store={MainViewStore}/>,
 //                 document.getElementById('container1'));
 //

// ReactDOM.render(<h1>Hello</h1>,
//               document.getElementById('container1'));

ReactDOM.render(<MainViewController action={MainViewAction} store={MainViewStore}/>,document.getElementById('app'));