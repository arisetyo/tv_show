/**
 * main app
 * @author: Arie M. Prasetyo (2020)
 */

import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import {Content, Home, Navigation} from './chrome';
import {Student} from './modules';
import styles from './App.css';

const App = () => (
	<HashRouter>
		<div className={styles.App}>
			<Navigation/>
			<Content>
				<Route path="/" exact component={Home} />

				<Route path="/student" component={Student}/>
			</Content>
		</div>
	</HashRouter>
);

export default App;