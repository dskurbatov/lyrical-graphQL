import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import SongList from './components/song_list' 
import App from './components/app' 
import SongCreate from './components/create_song'
import SongDetail from './components/song_detail'

const client = new ApolloClient({
	dataIdFromObject: o => o.id
})

const Root = () => {
  return (
  	<ApolloProvider client={client}>
  		<Router history={hashHistory}>
  			<Route path="/" component={App}>
  				<IndexRoute component={SongList} />
  				<Route path="songs/new" component={SongCreate} />
  				<Route path="songs/:id" component={SongDetail} />
  			</Route>
  		</Router>
  	</ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
