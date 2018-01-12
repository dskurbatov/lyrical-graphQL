import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricCreate extends Component {
	constructor(props){
		super(props)
		console.log('mounting new with props, ', props)
		this.state = { content: '' }
		//this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillUnmount(){
		console.log('unmounting component...')
		this.setState({ content: '' })
	}

	onSubmit(e){
		e.preventDefault()

		this.props.mutate({
			variables: {
				content: this.state.content,
				id: this.props.songId
			}
		}).then(() => console.log('added lyric to sing ', this.props.songId))

	}

	render(){
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<label>Add Lyrics</label>
				<input 
					value={this.state.content}
					onChange={e => this.setState({ content: e.target.value })}
				/>
			</form>
		)
	}
}

const mutation = gql`
	mutation AddLyricToSong($id: ID, $content: String){
		addLyricToSong(content: $content, songId: $id){
			id
			title
			lyrics {
				id
				content
				likes
			}
		}
	}
`

export default graphql(mutation)(LyricCreate)