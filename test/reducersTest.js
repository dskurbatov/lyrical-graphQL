const assert = require('assert')
const deepFreeze = require('deep-freeze')
const { songReducer, lyricReducer } = require('../redux/reducers/reducers')
const { ADD_SONG, REMOVE_SONG, ADD_LYRIC, LIKE_LYRIC, ADD_SONGS } = require('../redux/actions/sync_actions')

describe('songReducer', () => {
	it('adds new song', () => {
		const stateBefore = []
		const stateAfter = [
			{
				id: "0", 
				title: 'Coca Cola'
			}
		]

		const action = {
			type: ADD_SONG, 
			title: 'Coca Cola',
			id: "0"
		}

		deepFreeze(stateBefore)
		

		assert.deepEqual(songReducer(stateBefore, action), stateAfter)
	})

	it('removes song',() => {
		const stateAfter = [
			{
				id: 0,
				title: 'Coca Cola'
			}
		]
		const stateBefore = [
			{
				id: 0, 
				title: 'Coca Cola'
			},
			{
				id: 1,
				title: 'Pepsi'
			}
		]

		deepFreeze(stateBefore)
		
		const action = {
			type: REMOVE_SONG,
			id: 1
		}

		assert.deepEqual(songReducer(stateBefore, action), stateAfter)
	})

	it('initiate songs', () => {
		const stateBefore = []
		const action = {
			type: ADD_SONGS,
			songs: [
				{
					id: 0,
					title: 'Pepsi'
				}
			]
		}

		const stateAfter = [
			{
				id: 0,
				title: 'Pepsi'
			}
		]
		
		deepFreeze(stateBefore)
		deepFreeze(action)

		assert.deepEqual(songReducer(stateBefore, action), stateAfter)
	})
})

describe('lyricReducer', () => {
	it('adds new lyric to a song', () => {
		const stateBefore = []
		const action = {
			type: ADD_LYRIC,
			id: 0,
			content: 'I love coca cola',
			songId: 1
		}
		const stateAfter = [
			{
				id: 0,
				content: 'I love coca cola',
				songId: 1,
				likes: 0
			}
		]
		deepFreeze(stateBefore)
		deepFreeze(action)

		assert.deepEqual(lyricReducer(stateBefore, action), stateAfter)
	})
	it('adds likes to lyric', () => {
		const stateBefore = [
			{
				id: 0,
				content: 'I love coca cola',
				songId: 1,
				likes: 0
			},
			{
				id: 1,
				content: 'I love pepsi',
				songId: 1,
				likes: 0
			}	
		]

		const action = {
			type: LIKE_LYRIC,
			id: 1 
		}

		const stateAfter = [
			{
				id: 0,
				content: 'I love coca cola',
				songId: 1,
				likes: 0
			},
			{
				id: 1,
				content: 'I love pepsi',
				songId: 1,
				likes: 1
			}	
		]

		deepFreeze(stateBefore)
		deepFreeze(action)
		
		assert.deepEqual(lyricReducer(stateBefore, action), stateAfter)
	})
})
