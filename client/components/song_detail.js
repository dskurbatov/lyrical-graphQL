import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { graphql } from 'react-apollo'
// import query from '../queries/findSong'
import { Link } from 'react-router'
import LyricCreate from './create_lyric'
import LyricList from './lyric_list'

const getSong = (id, songs) => {
	return songs.find(song => song.id === id)
}

const getLyricsForSong = (id, lyrics) => {
	return lyrics.filter((lyric) => lyric.songId === id)
}

const SongDetail = (props) => {
	const { song, lyrics } = props 
	return (
		<div>
		 	<Link to="/">Back</Link>
 			<h1>{ song.title }</h1>
 			<LyricList lyrics={ lyrics }/>
 			<LyricCreate songId={ song.id }/>
 		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		song: getSong(ownProps.params.id, state.songs),
		lyrics: getLyricsForSong(ownProps.params.id, state.lyrics)
	}
}

export default connect(mapStateToProps)(SongDetail)
