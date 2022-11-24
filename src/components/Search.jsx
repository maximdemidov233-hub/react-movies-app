import React from "react";

export class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleInput = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search === '' ? 'matrix' : this.state.search, this.state.type)
        })
    }

    render() {
        return <div className="row">
            <div className="input-field col s12">
                <input placeholder="SEARCH"
                    id="password"
                    type="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleInput}
                />
                <button className="search-btn btn"
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                >SEARCH
                </button>
            </div>

            <div className="radio-wrapper">
                <label>
                    <input className="with-gap"
                        name="radio"
                        type="radio"
                        data-type="all"
                        checked={this.state.type === 'all'}
                        onChange={this.handleFilter}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap"
                        name="radio"
                        type="radio"
                        data-type="movie"
                        checked={this.state.type === 'movie'}
                        onChange={this.handleFilter}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input className="with-gap"
                        name="radio"
                        type="radio"
                        data-type="series"
                        checked={this.state.type === 'series'}
                        onChange={this.handleFilter}
                    />
                    <span>Series only</span>
                </label>

            </div>


        </div>
    }
}