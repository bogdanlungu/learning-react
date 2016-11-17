/* Start component
----------------------------------- */
var StarsFrame = React.createClass({
  render: function() {
    return (
        <div id="stars-frame">
            <div className="well">
                <span className="glyphicon glyphicon-star"></span>
            </div>
        </div>
    )
  }
});


/* Button component
----------------------------------- */
var ButtonFrame = React.createClass({
  render: function() {
    return (
        <div>...</div>
    )
  }
});


/* Answer component
----------------------------------- */
var AnswerFrame = React.createClass({
  render: function() {
    return (
        <div>...</div>
    )
  }
});


/* Main component
----------------------------------- */
var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
          <h2>Play game!</h2>
          <StarsFrame />
          <ButtonFrame />
          <AnswerFrame />
      </div>
    );
  }
});


/* Render
----------------------------------- */
ReactDOM.render(
  <Game />, 
  document.getElementById('container')
);
