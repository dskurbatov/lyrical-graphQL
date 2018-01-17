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

// class SongCreate extends Component {
// 	constructor(props){
// 		super(props)

// 		this.state = { title: '' }
// 		this.onSubmit = this.onSubmit.bind(this)
// 	}

// 	onSubmit(e){
// 		e.preventDefault()
		
// 		this.props.mutate({
// 			variables: { title: this.state.title },
// 			refetchQueries: [{ query }]
// 		}).then(() => hashHistory.push('/'))
// 	}


// 	render(){
// 		return(
// 			<div>
// 				<Link 
// 					to="/"
// 				>Back</Link>
// 				<h3>Create New Song</h3>
// 				<form onSubmit={this.onSubmit}>
// 					<label>Song Title:</label>
// 					<input 
// 						onChange={e => this.setState({ title: e.target.value })}
// 						value={this.state.title}
// 					/>
// 				</form>
// 			</div>
// 		)
// 	}
// }

// const mutation = gql`
// 	mutation AddSong($title: String){
// 		addSong(title: $title){
// 			title
// 		}
// 	}
// `

// export default graphql(mutation)(SongCreate)