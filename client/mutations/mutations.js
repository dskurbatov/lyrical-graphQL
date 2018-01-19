const addSongMutation = `
mutation AddSong($title: String!){
	addSong(title: $title){
		id
	}
}`

const removeSongMutation = `
mutation RemoveSong($id: ID!){
	deleteSong(id: $id){
		id
	}
}
`
const addLyricMutation = `
	mutation AddLyric($content: String!, $songId: ID!){
		addLyricToSong(content: $content, songId: $songId){
			id
			content
			likes
			song {
				id
			}
		}
	}
`

const likeLyricMutation = `
	mutation LikeLyric($id: ID!){
		likeLyric(id: $id){
			id
			content
			likes
		}
	}
`

module.exports = {
	addSongMutation,
	removeSongMutation,
	addLyricMutation,
	likeLyricMutation
}