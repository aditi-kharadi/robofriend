import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scrol from '../components/Scrol';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

/////STATE => Smart Components...........
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
		    searchfield: ''
		}
	}

	//ComponentDidMount()
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> {
				return response.json();
			})
			.then(users => {
				this.setState({robots: users})
			})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
		
	}
  render(){
  	const { robots, searchfield } = this.state;
  	const filteredRobots = robots.filter(robot =>{
           return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	  })
  	if(robots.length === 0)  // of (!robots.length)
  	{
  		return <h1 className='tc'>LOADING...</h1>
  	}
  	else {
		return (
			<div className='tc'>
			  <h1 className='f1'>RoboFriends</h1>
			  
			  <SearchBox searchChange={ this.onSearchChange } />
			  <Scrol>
			    <ErrorBoundary>
			     <CardList robots={ filteredRobots } />
			    </ErrorBoundary>
			  </Scrol>
			</div>
		);
    }
  }
}

export default App;