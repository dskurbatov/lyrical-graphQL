import React, { Component } from 'react'
// import gql from 'graphql-tag'
// import { graphql } from 'react-apollo'

const LyricList = (props) => {
	return (
		<ul className="collection">
			{props.lyrics.map(({ id, content, likes }) => {
				return (
					<li 
	 					key={id}
	 					className="collection-item"
	 				>{content}
	 					<div className="vote-box">
	 						<i 
	 							className="material-icons"
	 							//onClick={() => onClick(id)}
	 						>thumb_up</i>
	 						{likes}
	 					</div>
	 				</li>
				)
			})}
		</ul>
	)
}

export default LyricList
// const LyricList = (props) => {
	
// 	const onClick = (id) => {
// 		props.mutate({
// 			variables: { id }
// 		})
// 	}

// 	const renderLyrics = () => {	
// 		return props.lyrics.map(({ id, content, likes }) => {
// 			return (
// 				<li 
// 					key={id}
// 					className="collection-item"
// 				>{content}
// 					<div className="vote-box">
// 						<i 
// 							className="material-icons"
// 							onClick={() => onClick(id)}
// 						>thumb_up</i>
// 						{likes}
// 					</div>
// 				</li>
// 			)
// 		})
// 	}


// 	return(
// 		<ul className="collection">
// 			{renderLyrics(props.lyrics)}
// 		</ul>
// 	)
// }

// const mutation = gql`
// 	mutation AddLike($id: ID){
// 	  likeLyric(id: $id){
// 	    id
// 	    likes
// 	  }
// 	}
// `

// export default graphql(mutation)(LyricList)
