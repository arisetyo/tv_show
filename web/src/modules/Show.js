/**
 * show module interface
 * @author: Arie M. Prasetyo (2020)
 */

import React, {Component} from 'react';
import styles from './Show.css';
import {db_url, db_endpoint, moviedb_url, moviedb_discover, moviedb_key} from '../utilities/constants';
import {Button, Tag, ToggleButton} from '../interface';

class Show extends Component {
	state = {};

	componentDidMount() {
		// test DB API
		fetch(db_url)
		.then(response => response.json())
		.then(json => console.table(json));

		// test TV DB API
		fetch(moviedb_url + moviedb_discover + `?api_key=${moviedb_key}`)
		.then(response => response.json())
		.then(json => console.table(json.results));
	}

	onCreate = () => {
		// test API
		fetch(db_url + db_endpoint)
		.then(response => response.json())
		.then(json => console.table(json));
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