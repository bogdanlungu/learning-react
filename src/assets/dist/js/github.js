!function e(t,n,r){function a(c,u){if(!n[c]){if(!t[c]){var o="function"==typeof require&&require;if(!u&&o)return o(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[c]={exports:{}};t[c][0].call(s.exports,function(e){var n=t[c][1][e];return a(n?n:e)},s,s.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,t,n){"use strict";var r=React.createClass({getInitialState:function(){return{}},componentDidMount:function(){var e=this;$.get("https://api.github.com/users/"+this.props.login,function(t){e.setState(t)})},render:function(){return React.createElement("div",null,React.createElement("img",{src:this.state.avatar_url,width:"80"}),React.createElement("h3",null,this.state.name),React.createElement("hr",null))}}),a=React.createClass({handleSubmit:function(e){e.preventDefault();var t=this.refs.login;this.props.addCard(t.value)},render:function(){return React.createElement("form",{onSubmit:this.handleSubmit},React.createElement("input",{placeholder:"github name",ref:"login"}),React.createElement("button",null,"Add"))}}),i=React.createClass({getInitialState:function(){return{logins:[]}},addCard:function(e){this.setState({logins:this.state.logins.concat(e)})},render:function(){var e=this.state.logins.map(function(e){return React.createElement(r,{key:e,login:e})});return React.createElement("div",null,React.createElement(a,{addCard:this.addCard}),e)}});ReactDOM.render(React.createElement(i,null),document.getElementById("container"))},{}]},{},[1]);
//# sourceMappingURL=github.js.map
