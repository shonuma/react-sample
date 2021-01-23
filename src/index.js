import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

window.counter = 5;
window.isPlaying = false;
let exAddVSeconds = 30;

class ProgressBar extends React.Component {
    render() {
        var lineString = "Timer: " + "|".repeat(window.counter);
        
        return (
            <div className="ProgressBarDiv">
                <span className="ProgressBarSpan">
                    {lineString}
                </span>
            </div>
        )
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: window.counter };
    }
    tick() {
        console.log('tick');
        if (window.isPlaying) {
            if (window.counter > 0) {
                window.counter -= 1
                this.setState((state, props) => ({
                    counter: window.counter
                }));
            }
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div className="displayElapsedTime">
                secondsElapsed: {this.state.counter}
                <div className="ProgressBarArea">
                    <ProgressBar />
                </div>
            </div>
        );
    }
}

class TimerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {istoggleOn: true};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log(e);
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === "play/stop") {
            window.isPlaying = !window.isPlaying;
        } else if (e.target.innerHTML === "ext") {
            window.counter += exAddVSeconds;
            window.isPlaying = true
        } else {
            window.counter = parseInt(e.target.innerHTML);
            window.isPlaying = true
        }
    }
    render() {
        return (
            <button className="timerButton" onClick={this.handleClick}>
                {this.props.value}
            </button>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>React Sample Page</h1>
                <span>This is a description message.</span>
            </div>
        )
    }
}

class Content extends React.Component {
    renderButton(i) {
        return <TimerButton value={i} />;
    }
    render() {
        return (
            <div className="content">
                <div className="content-description">
                    <span className="content-description-text">This is a content article.</span>
                </div>
                <div className="content-description-buttons">
                    {this.renderButton(15)}
                    {this.renderButton(60)}
                    {this.renderButton(180)}
                    {this.renderButton('ext')}
                    {this.renderButton('play/stop')}
                </div>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>Copy right message</p>
            </div>
        )
    }
}

class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <Content />
                    <Timer />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);