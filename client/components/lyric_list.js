import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeLyric } from '../../redux/actions/sync_actions'
// import gql from 'graphql-tag'
// import { graphql } from 'react-apollo'

const LyricList = (props) => {
	const { lyrics, dispatch } = props

	return (
		<ul className="collection">
			{lyrics.map(({ id, content, likes }) => {
				return (
					<li 
	 					key={id}
	 					className="collection-item"
	 				>{content}
	 					<div className="vote-box">
	 						<i 
	 							className="material-icons"
	 							onClick={() => dispatch(likeLyric(id))}
	 						>thumb_up</i>
	 						{likes}
	 					</div>
	 				</li>
				)
			})}
		</ul>
	)
}

export default connect()(LyricList)
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
