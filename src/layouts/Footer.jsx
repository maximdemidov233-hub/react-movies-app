export function Footer() {
    return <footer className="page-footer  blue-grey darken-2">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Movies APP</h5>
                    <p className="grey-text text-lighten-4">The APP for lovers of cinema</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">We are on GIT</h5>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">REPO</a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright blue-grey darken-3">
            <div className="container">
                © {new Date().getFullYear()} Copyright

            </div>
        </div>
    </footer>
}