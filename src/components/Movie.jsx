export function Movie(props) {
    let {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: img
    } = props;

    return <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                img === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x250?text=${title}`} /> : <img className="activator" src={img} />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <ul className="card-content-bottom">
                <li>{year}</li>
                <li>{type}</li>
                <li>{id}</li>
            </ul>

        </div>

    </div>
}