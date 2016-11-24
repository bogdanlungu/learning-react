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
    var disabled, button, correct = this.props.correct;

    switch (correct) {
      case true:
        button = (
          <button className="btn btn-success"
            onClick={this.props.acceptAnswer}>
            <span className="glyphicon glyphicon-ok"></span>
          </button>
        );
        break;
      case false:
        button = (
          <button className="btn btn-danger">
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        );
        break;
      default:
        disabled = (this.props.selectedNumbers.length === 0);
        button = (
          <button className="btn btn-primary" disabled={disabled}
            onClick={this.props.checkAnswer}>=</button>
        );
    }

    return (
      <div id="button-frame">
        {button}
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
      selectedNumbers = this.props.selectedNumbers,
      usedNumbers = this.props.usedNumbers;
    for (var i = 0; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0); // see if the number it is in the array
      className += " used-" + (usedNumbers.indexOf(i) >= 0);
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
      selectedNumbers: [],
      usedNumbers: [],
      correct: null
    };
  },
  selectNumber: function (clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState(
        {
          selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
          correct: null
        }
      );
    }
  },
  unselectNumber: function (clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers,
      indexOfNumber = selectedNumbers.indexOf(clickedNumber);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({ selectedNumbers: selectedNumbers, correct: null });

  },
  sumOfSelectedNumbers: function () {
    return this.state.selectedNumbers.reduce(function (p, n) {
      return p + n;
    }, 0);
  },
  checkAnswer: function () {
    var correct = (this.state.numberOfStars == this.sumOfSelectedNumbers());
    this.setState({ correct: correct });
    console.log(this.sumOfSelectedNumbers());
    console.log(correct);
  },
  acceptAnswer: function () {
    var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.setState({
      selectedNumbers: [],
      usedNumbers: usedNumbers,
      correct: null,
      numberOfStars: Math.floor(Math.random() * 9) + 1
    })
  },
  render: function () {
    var numberOfStars = this.state.numberOfStars,
      selectedNumbers = this.state.selectedNumbers,
      usedNumbers = this.state.usedNumbers,
      correct = this.state.correct,
      checkAnswer = this.checkAnswer;
    return (
      <div id="game">
        <h2>Play game!</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={numberOfStars} />
          <ButtonFrame selectedNumbers={selectedNumbers}
            correct={correct}
            checkAnswer={checkAnswer}
            acceptAnswer={this.acceptAnswer} />
          <AnswerFrame selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber} />
        </div>
        <NumbersFrame selectedNumbers={selectedNumbers}
          usedNumbers={usedNumbers}
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
