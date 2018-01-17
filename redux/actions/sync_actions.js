const ADD_SONG = 'ADD_SONG'
const REMOVE_SONG = 'REMOVE_SONG'
const ADD_LYRIC = 'ADD_LYRIC'
//export const LIKE_LYRIC = 'LIKE_LYRIC'

const addSong = (title) => {
	return {
		type: ADD_SONG,
		title
	}
}

const removeSong = (id) => {
	return {
		type: REMOVE_SONG,
		id
	}
}

const addLyric = (content, songId) => {
	return {
		type: ADD_LYRIC,
		content,
		songId
	}
}


module.exports = {
	ADD_SONG,
	REMOVE_SONG,
	ADD_LYRIC,
	addLyric,
	addSong,
	removeSong
}