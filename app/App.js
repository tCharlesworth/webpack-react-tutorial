var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return (
            <h2>Hello World</h2>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));