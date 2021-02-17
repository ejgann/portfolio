import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
    state = { displayBio: false };
    // setting state equal to an object containing the displayBio property set to false
    // when reassigning state is necessary, will use this.setState() to do so


    toggleDisplayBio = () => {
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
                <hr />
                <Projects />
            </div>
        )
    }
}

export default App;