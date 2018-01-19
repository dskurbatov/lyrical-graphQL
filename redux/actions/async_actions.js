const { addSong, removeSong, initSongs, initLyrics, addLyric, likeLyric } = require('./sync_actions')
const { request } = require('graphql-request')
const { allSongsQuery, allLyricsQuery } = require('../../client/queries/queries')
const { addSongMutation, removeSongMutation, addLyricMutation, likeLyricMutation } = require('../../client/mutations/mutations')
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

function asyncAddLyric(content, songId){
	return function(dispatch){
		return request(endpoint, addLyricMutation, { content, songId })
			.then(({ addLyricToSong: { id }}) => dispatch(addLyric(content, songId, id)))
			.catch((error) => console.log(error))
	}
}

function asyncLikeLyric(id){
	return function(dispatch){
		dispatch(likeLyric(id))
		return request(endpoint, likeLyricMutation, { id })
			.then(data => data)
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
		.then(([{ songs }, { lyrics }]) => {
			dispatch(initSongs(songs))
			dispatch(initLyrics(lyrics))
		})
	} 	
}

module.exports = {
	fetchAll,
	asyncAddSong,
	asyncRemoveSong,
	fetchAllSongs,
	asyncAddLyric,
	asyncLikeLyric
}