/**
 * home page
 * @author: Arie M. Prasetyo (2020)
 */

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {db_url, db_endpoint, tmdb_key, tmdb_url, tmdb_discover_tv, tmdb_image_url} from '../utilities/constants';
import {getRandomFeaturedUrl} from '../utilities/tools';
import styles from './Home.css';
import {Donut} from '../interface';

class Home extends Component {
	state = {
		keyword: ''
	};
	poster_size = 'w154/';
	background_size = '	w780';

	componentDidMount() {
		fetch(tmdb_url + tmdb_discover_tv + `?` + getRandomFeaturedUrl() + `&api_key=${tmdb_key}`)
		.then(response => response.json())
		.then(this.storeRandom);

		// test TV DB API
		fetch(tmdb_url + tmdb_discover_tv + `?api_key=${tmdb_key}`)
		.then(response => response.json())
		.then(this.storeShows);

		// test DB API
		// fetch(db_url)
		// .then(response => response.json())
		// .then(json => console.table(json));
	}

	componentDidUpdate(prevProps, prevState) {
		const {keyword} = this.state;
		if (prevState.keyword !== keyword && keyword.length > 3) {
			this.setState({indicator: 'Searching...'});
			fetch(tmdb_url + '/search/tv?' + `query=${keyword}` + `&api_key=${tmdb_key}`)
			.then(response => response.json())
			.then(this.storeShows);
		}
	}

	storeShows = data => {
		this.setState({
			retrieved_results: data.results,
			results: data.results,
			page: data.page,
			total_pages: data.total_pages,
			indicator: ''
		})
	}

	storeRandom = data => {
		this.setState({
			retrieved_random: data.results,
			random: data.results,
		})
	}

	updateKeywordValue = e => {
		this.setState({keyword: e.target.value});
	}

	render() {
		const {indicator, keyword, random, results} = this.state;
		return (
			<div className={styles.Home}>
				<img
					class={styles.background}
					src={random ? `${tmdb_image_url}${this.background_size}${random[0].backdrop_path}` : null}/>

				<div className={styles.searchBar}>
					<input
						type='text'
						placeholder='Search...'
						value={keyword}
						onChange={this.updateKeywordValue}/>
						<span>{indicator}</span>
				</div>

				{
					random ?
					<div className={styles.featured}>
						<h2>Featured TV Show:</h2>
						<h1>{random[0].original_name}</h1>
						<p>{random[0].overview}</p>
						<Link to={`/show/${random[0].id}`}>Go to show</Link>
					</div>
					: null
				}

				<div className={styles.resultContainer}>
				{
					results && results.map(show => (
						<div className={styles.result}>
							<Link to={`/show/${show.id}`}>
								<img src={`${tmdb_image_url}${this.poster_size}${show.poster_path}`}/>
								<div className={styles.text}>
									<span>{show.original_name}</span>
									<p>{show.overview}</p>
								</div>
								<div className={styles.avg}>
									{show.vote_average ? <Donut value={show.vote_average} w={30} h={30} showText={false} darkBg={true}/> : ''}
								</div>
							</Link>
						</div>
					))
				}
				</div>
			</div>
		)
	}
}

export default Home;