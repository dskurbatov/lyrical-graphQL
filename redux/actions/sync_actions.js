export const ADD_SONG = 'ADD_SONG'
export const REMOVE_SONG = 'REMOVE_SONG'
export const ADD_LYRIC_TO_SONG = 'ADD_LYRIC_TO_SONG'
export const LIKE_LYRIC = 'LIKE_LYRIC'

function addSong(title){
	return {
		type: ADD_SONG_TITLE,
		title
	}
}

function removeSong(id){
	return {
		type: REMOVE_SONG,
		id
	}
}

function addLyricToSong(id, content){
	return {
		type: ADD_LYRIC_TO_SONG,
		songId: id,
		content
	}
}

function likeLyric(id){
	return {
		type: LIKE_LYRIC,
		id
	}
}
