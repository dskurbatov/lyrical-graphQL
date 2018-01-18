const {
	ADD_SONG,
	REMOVE_SONG,
	ADD_LYRIC,
	LIKE_LYRIC,
	ADD_SONGS
} = require('../actions/sync_actions')

let lyricId = 0

const songReducer = (state = [], action) => {
	console.log(state, action)
	switch(action.type){
		case ADD_SONG:
			return [
				...state,
				{
					id: action.id,
					title: action.title
				}
			]
		case ADD_SONGS:
			return [
				...action.songs
			]
		case REMOVE_SONG:
			return state.filter(song => action.id !== song.id)
		default:
			return state
	}
}

const lyricReducer = (state = [], action) => {
	switch(action.type){
		case ADD_LYRIC:
			return [
				...state,
				{
					id: String(lyricId++),
					content: action.content,
					songId: action.songId,
					likes: 0
				}
			]
		case LIKE_LYRIC:
			const index = state.findIndex(lyric => lyric.id === action.id)
			return [
				...state.slice(0, index),
				Object.assign({}, state[index], {likes: state[index].likes + 1}),
				...state.slice(index + 1, state.length)
			]
		default:
			return state
	}
}

const appReducer = (state = {}, action) => {
	return {
		songs: songReducer(state.songs, action),
		lyrics: lyricReducer(state.lyrics, action)
	}
}


module.exports = {
	songReducer,
	lyricReducer,
	appReducer
}




