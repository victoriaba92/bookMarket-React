import styles from './Header.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1 className={styles.header}>BookMarket</h1>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <div className="container-fluid">

                    {/* Botón hamburguesa */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-auto gap-lg-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/productos">
                                    Productos
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/alta">
                                    Nuevo Producto
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/nosotros">
                                    Nosotros
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/carrito">
                                    Carrito
                                </Link>
                            </li>
                        </ul>
                        {/* Buscador */}
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="¿Qué estas buscando?"
                            />

                            <button
                                className="btn btn-outline-light"
                                type="submit"
                            >
                                Buscar
                            </button>
                        </form>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;