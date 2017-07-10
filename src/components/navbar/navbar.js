import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { login, logout, isLoggedIn } from '../../utils';
import './style.css'

class Navbar extends Component {
	constructor(props){
		super(props)
	}

	first(){
			browserHistory.push("/");
	}

	second(){
			browserHistory.push("/second");
	}
  render() {
    return (
      <nav className="navbar">
        <ul className="menu-items">
					<li>
						<button onClick={()=>this.first()}>First</button>
					</li>
					<li>
						{
							isLoggedIn() &&
								<button onClick={()=>this.second()}>Second</button>
						}
					</li>
        </ul>
        <ul className="login-wrapper">
					<li>
						{
							!isLoggedIn() &&
								<button 
									className="positive" 
									onClick={()=>login()}
								>Log In</button>
						}
					</li>
					<li>
						{
							isLoggedIn() &&
								<button 
									className="negative"
									onClick={()=>logout()}
								>Log out</button>
						}
					</li>
        </ul>
      </nav>
    );
  }
}

export { Navbar };