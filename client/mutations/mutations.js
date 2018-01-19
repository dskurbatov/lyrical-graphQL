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
		}
	}
`

module.exports = {
	addSongMutation,
	removeSongMutation,
	addLyricMutation
}