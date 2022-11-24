import React from "react";
import { Preloader } from "../components/Preloader";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_MOVIE_API_KEY;

export class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.Search, loading: false })
            });
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true })

        fetch(`http://omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.Search, loading: false })
            });
    }

    render() {
        const { movies, loading } = this.state;

        return <div className="container content blue-grey darken-1">
            <Search searchMovies={this.searchMovies} />
            {
                loading ? <Preloader /> : (<Movies movies={this.state.movies} />)
            }

        </div>
    }
}