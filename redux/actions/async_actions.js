const { addSong, removeSong, initSongs } = require('./sync_actions')
const { request } = require('graphql-request')
const { query } = require('../../client/queries/fetchSongs')
const endpoint = 'http://localhost:4000/graphql'

const mutation = `mutation AddSong($title: String!){
	addSong(title: $title){
		id
	}
}`

function asyncAddSong(title){
	return function (dispatch){
		return request(endpoint, mutation, { title })
			.then(({ addSong: { id } }) => dispatch(addSong(title, id)))
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
			.then(({songs}) => dispatch(initSongs(songs)))
	}
}

module.exports = {
	asyncAddSong,
	fetchAllSongs
}