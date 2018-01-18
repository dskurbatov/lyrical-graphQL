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

module.exports = {
	addSongMutation,
	removeSongMutation
}