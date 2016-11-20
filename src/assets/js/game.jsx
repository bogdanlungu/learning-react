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
        return (
            <div id="button-frame">
                <button className="btn btn-primary">=</button>
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
                <span key={i}>
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
            clickNumber = this.props.clickNumber,
            selectedNumbers = this.props.selectedNumbers;
        for (var i = 0; i <= 9; i++) {
            className = "number selected-" + (selectedNumbers.indexOf(i) >= 0); // see if the number it is in the array
            numbers.push(
                <div key={i} className={className} onClick={clickNumber.bind(null, i)}>
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
        return { numberOfStars: Math.floor(Math.random() * 9) + 1,
                 selectedNumbers: []
        };
    },
    clickNumber: function (clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState(
                { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) }
            );
        }
    },
    render: function () {
        return (
            <div id="game">
                <h2>Play game!</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame numberOfStars={this.state.numberOfStars} />
                    <ButtonFrame />
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers} />
                </div>
                <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                    clickNumber={this.clickNumber} />
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
