import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component {
    state = { displayBio: false };
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
		      <div>
		        <img src={profile} alt="profile" className ='profile'/>
						<h1>Hello!</h1>
						<p>My name is David. I am a software engineer.</p>
						<p>I am always looking forward to working on meaningful projects.</p>
						<div>
							<p>I live in San Francisco, and code every day.</p>
							<p>My favorite language is Javascript</p>
							<p>Besides coding, I also love music and ramen!</p>

		          {
		            this.state.displayBio ? (
		              <div>
		                <p>I am ryowu.</p>
		                <p>43 year old.</p>
		                <p>Live in Tainan.</p>
		                <button onClick={this.toggleDisplayBio}>Read Less</button>
		              </div>
		            ) : (
		              <div>
		                <button onClick={this.toggleDisplayBio}>Read More</button>
		              </div>
		            )
		          }
		          <hr/>
		          <Projects />
							<hr/>
		          <SocialProfiles/>
		        </div>
		      </div>
        )
    }
}

export default App;