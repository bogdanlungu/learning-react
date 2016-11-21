/* Start component
----------------------------------- */
var StarsFrame = React.createClass({
  render: function () {
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {
      stars.push(
        <span key={i} className="glyphicon glyphicon-star"></span>
      );
    }
    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    )
  }
});


/* Button component
----------------------------------- */
var ButtonFrame = React.createClass({
  render: function () {
    var disabled;
    disabled = (this.props.selectedNumbers.length === 0);
    return (
      <div id="button-frame">
        <button className="btn btn-primary" disabled={disabled}>=</button>
      </div>
    )
  }
});


/* Answer component
----------------------------------- */
var AnswerFrame = React.createClass({
  render: function () {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function (i) {
      return (
        <span key={i} onClick={props.unselectNumber.bind(null, i)}>
          {i}
        </span>
      )
    });

    return (
      <div id="answer-frame">
        <div className="well">
          {selectedNumbers}
        </div>
      </div>
    )
  }
});


/* Numbers frame
----------------------------------- */
var NumbersFrame = React.createClass({
  render: function () {

    var numbers = [], className,
      selectNumber = this.props.selectNumber,
      selectedNumbers = this.props.selectedNumbers;
    for (var i = 0; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0); // see if the number it is in the array
      numbers.push(
        <div key={i} className={className} onClick={selectNumber.bind(null, i)}>
          {i}
        </div>
      );
    }
    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    )
  }
});


/* Main component
----------------------------------- */
var Game = React.createClass({
  getInitialState: function () {
    return {
      numberOfStars: Math.floor(Math.random() * 9) + 1,
      selectedNumbers: []
    };
  },
  selectNumber: function (clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState(
        { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) }
      );
    }
  },
  unselectNumber: function (clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers,
      indexOfNumber = selectedNumbers.indexOf(clickedNumber);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({ selectedNumbers: selectedNumbers });

  },
  render: function () {
    var numberOfStars = this.state.numberOfStars,
      selectedNumbers = this.state.selectedNumbers;
    return (
      <div id="game">
        <h2>Play game!</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={numberOfStars} />
          <ButtonFrame selectedNumbers={selectedNumbers} />
          <AnswerFrame selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber} />
        </div>
        <NumbersFrame selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber} />
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
