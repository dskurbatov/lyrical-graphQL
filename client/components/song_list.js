import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchAll, asyncRemoveSong } from '../../redux/actions/async_actions'

class SongList extends Component{
	
	componentDidMount(){
		this.props.dispatch(fetchAll())
	}

	renderSongs(){	
		return this.props.songs.map(({id, title }) => {
			return(
				<li key={id} className="collection-item">
					<Link to={`/songs/${id}`}> 						
						{title}
					</Link>
					<i 
 						className="material-icons"
 						onClick={() => this.props.dispatch(asyncRemoveSong(id))}
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
		songs: state.songs,
	}
}

export default connect(mapStateToProps)(SongList)