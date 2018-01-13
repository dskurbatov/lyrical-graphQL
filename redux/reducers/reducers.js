const {
	ADD_SONG,
	REMOVE_SONG,
	ADD_LYRIC_TO_SONG,
	LIKE_LYRIC
} = require('../actions/sync_actions')

function songReducer(state = [], action){
	switch(action.type){
		case ADD_SONG:
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					lyrics: []
				}
			]
		case REMOVE_SONG:
			return state.filter(song => action.id !== song.id)
		default:
			return state
	}
}

function lyricReducer(state = [], action){
	switch(action.type){
		case ADD_LYRIC_TO_SONG:
			return [
				...state,
				{
					id: action.id,
					content: action.content,
					songId: action.songId,
					likes: 0
				}
			]
		case LIKE_LYRIC:
			const index = state.indexof({id: action.id})
			return [
				...state.slice(0, index),
				state[index].likes++,
				...state.slice(index+ 1, state.length)
			]
	}
}






