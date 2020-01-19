/**
 * home page
 * @author: Arie M. Prasetyo (2020)
 */

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {db_url, db_endpoint, tmdb_key, tmdb_url, tmdb_discover_tv, tmdb_image_url} from '../utilities/constants';
import styles from './Home.css';

class Home extends Component {
	state = {};
	poster_size = 'w154/';
	background_size = '	w780';

	componentDidMount() {
		// test DB API
		// fetch(db_url)
		// .then(response => response.json())
		// .then(json => console.table(json));

		fetch(tmdb_url + tmdb_discover_tv + `?` + `sort_by=vote_average.desc&vote_count.gte=10` + `&api_key=${tmdb_key}`)
		.then(response => response.json())
		.then(this.storeRandom);

		// test TV DB API
		fetch(tmdb_url + tmdb_discover_tv + `?api_key=${tmdb_key}`)
		.then(response => response.json())
		.then(this.storeShows);
	}

	storeShows = data => {
		this.setState({
			retrieved_results: data.results,
			results: data.results,
			page: data.page,
			total_pages: data.total_pages
		})
	}

	storeRandom = data => {
		this.setState({
			retrieved_random: data.results,
			random: data.results,
		})
	}

	render() {
		return (
			<div className={styles.Home}>
				<img
					class={styles.background}
					src={this.state.random ? `${tmdb_image_url}${this.background_size}${this.state.random[0].backdrop_path}` : null}/>

				<div className={styles.resultContainer}>
				{
					this.state.results && this.state.results.map(show => (
						<div className={styles.result}>
							<Link to={`/show/${show.id}`}>
								<img src={`${tmdb_image_url}${this.poster_size}${show.poster_path}`}/>
							</Link>
							<span>{show.original_name}</span>
						</div>
					))
				}
				</div>
			</div>
		)
	}
}

export default Home;