import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'
import { Link } from 'react-router'
// import query from '../queries/fetchSongs'
import { fetchAllSongs } from '../../redux/actions/async_actions'
import { removeSong } from '../../redux/actions/sync_actions'

class SongList extends Component{

	renderSongs(){
		return this.props.songs.map(({id, title }) => {
			return(
				<li key={id} className="collection-item">
					<Link to={`/songs/${id}`}> 						
						{title}
					</Link>
					<i 
 						className="material-icons"
 						onClick={() => this.props.dispatch(removeSong(id))}
 					>delete</i>
 				</li>
 			) 
		})
	}

	render(){
		return (
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link 
					to="songs/new"
					className="btn-floating btn-large red right"
				><i className="material-icons">add</i></Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs
	}
}

export default connect(mapStateToProps)(SongList)

// class SongList extends Component {
// 	constructor(props){
// 		super(props)

// 		this.onClick = this.onClick.bind(this)
// 	}

// 	onClick(id){
// 		this.props.mutate({
// 			variables: { id }
// 		}).then(() => this.props.data.refetch())
// 	}

// 	renderSongs(){
// 		return this.props.data.songs.map(({ id, title }) => {
// 			return(
// 				<li key={id} className="collection-item">
// 					<Link to={`/songs/${id}`}>
// 						{title}
// 					</Link>
// 					<i 
// 						className="material-icons"
// 						onClick={() => this.onClick(id)}
// 					>delete</i>
// 				</li>
// 			) 
// 		})
// 	}

// 	render(){
// 		if(this.props.data.loading){
// 			return <div>Loading...</div>
// 		}
		
// 		return (
// 			<div>
// 				<ul className="collection">
// 					{this.renderSongs()}
// 				</ul>
// 				<Link 
// 					to="songs/new"
// 					className="btn-floating btn-large red right"
// 				><i className="material-icons">add</i></Link>
// 			</div>
// 		)
// 	}
// }

// const mutation = gql`
// 	mutation DeleteSong($id: ID){
//   deleteSong(id: $id){
//     id
//   }
// }
// `

// export default graphql(mutation)(
// 	graphql(query)(SongList)
// )