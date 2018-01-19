import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncAddLyric } from '../../redux/actions/async_actions'

const LyricCreate = (props) => {
	const { songId, dispatch } = props
	let textInput
	
	const onClick = (e) => {
		e.preventDefault()

		dispatch(asyncAddLyric(textInput.value, songId))
		textInput.value = ''
	}

	return(
		<div>
			<label>Add Lyrics</label>
			<input ref={input => textInput = input} />
			<button onClick={onClick}>ADD</button>
		</div>
		
	)
}

export default connect()(LyricCreate)