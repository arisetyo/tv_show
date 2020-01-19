/**
 * show module interface
 * @author: Arie M. Prasetyo (2020)
 */

import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {db_url, db_endpoint, tmdb_key, tmdb_url, tmdb_discover, tmdb_image_url} from '../utilities/constants';
import {Button, Tag, ToggleButton} from '../interface';
import styles from './Show.css';

const Show = () => {
	const [show, setShow] = useState({});
	const [season, setSeason] = useState({});
	const {id} = useParams();
	const poster_size = 'w185';

	// get show info
	fetch(tmdb_url + `/tv/${id}?api_key=${tmdb_key}`)
	.then(response => response.json())
	.then(data => {
		if (!show.name) {
			setShow(data);
		}
	});

	// get season info
	fetch(tmdb_url + `/tv/${id}/season/1?api_key=${tmdb_key}`)
	.then(response => response.json())
	.then(data => {
		if (!season.name) {
			setSeason(data);
		}
	});

	const onCreate = () => {
		console.log('test');
	}

	return (
		<div className={styles.Show}>
			<h1>Show id</h1>
			<Button onClick={onCreate}>Add Show +</Button>
			<Button onClick={onCreate}>Fave Show &hearts;</Button>

			<div>
				<h1>{show.name}</h1>
				<img src={`${tmdb_image_url}${poster_size}${show.poster_path}`}/>
			</div>
			
			<div>
				<h2>{season.name}</h2>
				<p>{season.overview}</p>
			</div>
		</div>
	)
}

export default Show;