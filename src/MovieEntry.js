import React from 'react';
import UsersList from './UsersList';

class MovieEntry extends React.Component {

	render() {
		const {movie, users, profiles} = this.props;

		const getProfile = userID =>
			profiles.find( profile => parseInt(profile.userID) === userID );

		const movieFans = users.filter(user =>
			parseInt(getProfile(user.id).favoriteMovieID) === movie.id
		);

		return (
			<li key={movie.id}>
				<h2>{movie.name}</h2>
				{movieFans.length === 0
					? (<p>None of the current users liked this movie</p>)
					: <UsersList users={movieFans} />
				}
			</li>
		);
	}

}

export default MovieEntry;