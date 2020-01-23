/**
 * show module interface
 * @author: Arie M. Prasetyo (2020)
 */

import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {db_url, db_endpoint, tmdb_key, tmdb_url, tmdb_discover, tmdb_image_url} from '../utilities/constants';
import {Button, Donut} from '../interface';
import styles from './Show.css';

const Show = () => {
	const [show, setShow] = useState({});
	const [season, setSeason] = useState({});
	const [selected, setSelected] = useState({});
	const {id} = useParams();
	const poster_size = 'w185';
	const background_size = '	w780';

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

	const expandEpisode = id => {
		setSelected(id);
	}

	return (
		<div className={styles.Show}>
			<img
				class={styles.background}
				src={`${tmdb_image_url}${background_size}${show.backdrop_path}`}/>

			<div className={styles.content}>
				<div className={styles.infoBox}>
					<h1>{show.name}</h1>

					<img
						className={styles.seasonPoster}
						src={`${tmdb_image_url}${poster_size}${season.poster_path}`}/>

					<div className={styles.buttons}>
						{show.vote_average ? <Donut value={show.vote_average}/> : ''}
						<Button onClick={onCreate}>Fave &hearts;</Button>
					</div>

					<p>{show.overview}</p>
				</div>

				<div className={styles.season}>
					<h2>{season.name}</h2>
					<p>{season.overview}</p>
				</div>
			
				<div className={styles.episodes}>
					{
						season.episodes && season.episodes.map(episode => (
							<div className={`${styles.episode} ${episode.id === selected ? styles.selected : ''}`} onClick={() => expandEpisode(episode.id)}>
								<div>
									{episode.episode_number}. <strong>"{episode.name}"</strong> - <em>{Math.round(episode.vote_average * 10)}%</em>
								</div>
								<div className={styles.info}>
									<div>
										(Aired on {episode.air_date}) - "{episode.overview}"
									</div>
									<Button>Play &#9656;</Button>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Show;