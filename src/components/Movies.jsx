import { Movie } from "./Movie";

export function Movies(props) {
    const { movies = [] } = props;

    return <div className="movies">
        {
            movies.length ? movies.map(card =>
                (<Movie key={card.imdbID} {...card} />)) :
                <h3>Nothing found</h3>
        }

    </div>
}