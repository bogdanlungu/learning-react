/* Define a component
----------------------------------- */
var Main = React.createClass({
  render: function() {
    return (
      <h1>React.js</h1>
    );
  }
});


/* Render a component to the browser:
----------------------------------- */
ReactDOM.render(
  <Main />, // The name of the component
  document.getElementById('container') // Where to render
);
