const { addSong, removeSong, allSongs } = require('./sync_actions')
const { request } = require('graphql-request')
const { query } = require('../../client/queries/fetchSongs')
const endpoint = 'http://localhost:4000/graphql'

function asyncAddSong(title){
	return function (dispatch){
		return request(endpoint, mutation, variables)
			.then(({ id }) => dispatch(addSong(title, id)))
	}
}

function asyncRemoveSong(id){
	return function(dispatch){
		return request(endpoint, mutation, variables)
			.then(() => dispatch(removeSong(id)))
	}
}

const fetchAllSongs = () => {
	return (dispatch) => {
		return request(endpoint, query)
			.then(({songs}) => dispatch(allSongs(songs)))
	}
}

module.exports = {
	fetchAllSongs
}