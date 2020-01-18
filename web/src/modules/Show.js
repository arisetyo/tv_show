/**
 * show module interface
 * @author: Arie M. Prasetyo (2020)
 */

import React, {Component} from 'react';
import styles from './Show.css';
import {Button, Tag, ToggleButton} from '../interface';

class Show extends Component {
	state = {};
	
	url = 'http://localhost:3001';
	endpoint = '/api/v1/shows';

	componentDidMount() {
		// test API
		fetch(url)
		.then(response => response.json())
		.then(json => console.table(json))
	}

	onCreate = () => {
		console.log('create a new show');
	}

	render() {
		return (
			<div className={styles.Show}>
				<h1>Show module</h1>
				<Button onClick={this.onCreate}>Add Show +</Button>
			</div>
		);
	}
}

export default Student;