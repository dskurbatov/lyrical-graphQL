const addSongMutation = `mutation AddSong($title: String!){
	addSong(title: $title){
		id
	}
}`

module.exports = {
	addSongMutation
}