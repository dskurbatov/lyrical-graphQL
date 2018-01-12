import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/findSong'
import { Link } from 'react-router'
import LyricCreate from './create_lyric'
import LyricList from './lyric_list'

const SongDetail = (props) => {
	const { song } = props.data
	console.log(song)
	if(!song) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<Link to="/">Back</Link>
			<h1>{ song.title }</h1>
			<LyricList lyrics={ song.lyrics }/>
			<LyricCreate songId={ song.id }/>
		</div>
		
	)
}

export default graphql(query, {
	options: (ownProps) => {
		return {
			variables: { id: ownProps.params.id }
		}
	} 
})(SongDetail)