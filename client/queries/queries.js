const allSongsQuery = `
	{
		songs {
			id
			title
		}
	}
` 
const findSongQuery = `
	query FindSong($id: ID!){
		song(id: $id){
			id
			title
			lyrics{
				id
				content
				likes
			}
		}
	}
`	

module.exports = {
	allSongsQuery,
	findSongQuery
}

