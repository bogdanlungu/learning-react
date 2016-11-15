/* Define 
----------------------------------- */
var Card = React.createClass({
    render: function () {
        return (
            <div>
                <img src="" />
                <h3>Name</h3>
                <hr />
            </div>
        );
    }
});


/* Main component 
----------------------------------- */
var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Card />
            </div>
        );
    }
});


/* Render
----------------------------------- */
ReactDOM.render(
    <Main />,
    document.getElementById('container') 
);
