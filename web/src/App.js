/**
 * main app
 * @author: Arie M. Prasetyo (2020)
 */

import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import {Content, Home, Navigation} from './chrome';
import {Show} from './modules';
import styles from './App.css';

const App = () => (
	<HashRouter>
		<div className={styles.App}>
			<Navigation/>
			<Content>
				<Route path="/" exact component={Home} />
				<Route path="/show/:id" component={Show}/>
			</Content>
			<footer>
				Icons made by <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
			</footer>
		</div>
	</HashRouter>
);

export default App;