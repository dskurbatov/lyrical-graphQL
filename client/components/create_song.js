import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { query } from '../queries/fetchSongs'
import { addSong } from '../../redux/actions/sync_actions'

const SongCreate = (props) => {
	let textInput;

	const onClick = (e) => {
		e.preventDefault()

		props.dispatch(addSong(textInput.value))

		hashHistory.push('/')
	}

	return(
		<div>
			<Link 
				to="/"
			>Back</Link>
			<h3>Create New Song</h3>
			<label>Song Title:</label>
			<input ref={input => textInput = input} />
			<button onClick={onClick}>ADD</button>
		</div>
	)
}

export default connect()(SongCreate)
