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
const findLyrics = `
	query FindLyrics($id: ID!){
		findLyrics(id: $id){
			id,
			content,
			likes
		}
	}
`	
const allLyricsQuery = `
{
	lyrics {
		id,
		content,
		likes,
		song {
			id
		}
	}
}
`

module.exports = {
	allSongsQuery,
	findSongQuery,
	findLyrics,
	allLyricsQuery
}

