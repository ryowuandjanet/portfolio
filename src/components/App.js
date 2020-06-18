import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component {
    state = { displayBio: false };
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
    	console.log('Hi');
			return (
				<div>
					<img src={profile} alt="profile" className ='profile'/>
					<h1>Hello!</h1>
					<p>My name is Ryowu.</p>
					<Title />
					<p>I am always looking forward to working on meaningful projects.</p>
					{
						this.state.displayBio ? (
							<div>
								<p>I live in San Francisco, and code every day.</p>
								<p>My favorite language is Javascript</p>
								<p>Besides coding, I also love music and ramen!</p>
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
			)
    }
}

export default App;