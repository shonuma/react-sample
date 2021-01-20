import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <h1>React Sample Page</h1>
                <span>This is a description message.</span>
            </div>
        )
    }
}

class TimerButton extends React.Component {
    render() {
        return (
            <button className="timerButton">
                {this.props.value}
            </button>
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
                </div>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
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