const { addSong, removeSong, initSongs, initLyrics } = require('./sync_actions')
const { request } = require('graphql-request')
const { allSongsQuery, allLyricsQuery } = require('../../client/queries/queries')
const { addSongMutation, removeSongMutation } = require('../../client/mutations/mutations')
const endpoint = 'http://localhost:4000/graphql'

function asyncAddSong(title){
	return function (dispatch){
		return request(endpoint, addSongMutation, { title })
			.then(({ addSong: { id } }) => dispatch(addSong(title, id)))
	}
}

function asyncRemoveSong(id){
	return function(dispatch){
		return request(endpoint, removeSongMutation, { id })
			.then(() => dispatch(removeSong(id)))
	}
}

const fetchAllSongs = () => {
	return (dispatch) => {
		return request(endpoint, allSongsQuery)
			.then(({songs}) => dispatch(initSongs(songs)))
	}
}

const fetchAll = () => {
	return (dispatch) => {
		return Promise.all([request(endpoint, allSongsQuery), request(endpoint, allLyricsQuery)])
		
		.then(([{ songs } , { lyrics }]) => {
			dispatch(initSongs(songs))
			dispatch(initLyrics(lyrics))
		})
	} 	
}

module.exports = {
	fetchAll,
	asyncAddSong,
	asyncRemoveSong,
	fetchAllSongs
}