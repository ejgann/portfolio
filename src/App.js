import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        // must call super method to invoke constructor of parent class. Including this prevents error message saying state cannot be defined. It is now defined through inclusion of super().
        this.state = { displayBio: false };

        console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Emily. I'm a software engineer.</p>
                <p>I'm always looking forward to learning new things.</p>
                {
                this.state.displayBio ? (
                    <div>
                        <p>I live in the D.C. area and enjoy coding every day.</p>
                        <p>My favorite languages are JavaScript and Ruby.</p>
                        <p>When not coding, I enjoy discovering new music and playing with my three dogs.</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default App;