/**
 * show module interface
 * @author: Arie M. Prasetyo (2020)
 */

import React, {Component} from 'react';
import styles from './Show.css';
import {url, endpoint} from '../utilities/constants';
import {Button, Tag, ToggleButton} from '../interface';

class Show extends Component {
	state = {};

	componentDidMount() {
		// test API
		fetch(url)
		.then(response => response.json())
		.then(json => console.table(json))
	}

	onCreate = () => {
		// test API
		fetch(url + endpoint)
		.then(response => response.json())
		.then(json => console.table(json))
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

export default Show;