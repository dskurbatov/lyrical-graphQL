import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncLikeLyric } from '../../redux/actions/async_actions'

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
	 							onClick={() => dispatch(asyncLikeLyric(id))}
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
