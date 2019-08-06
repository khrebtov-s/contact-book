import React from 'react';
import './navbar.css';

export default props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-green">
        <a href="#" className="navbar-brand">Книга контактов</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
            <a href="#" className="nav-item nav-link" onClick={props.onSort.bind(null, 'name')}>A-Z</a>
            </div>
            <form className="form-inline ml-auto">
                <input type="text" className="form-control mr-sm-2" placeholder="Введите имя" />
                <button type="submit" className="btn btn-outline-light">Поиск</button>
            </form>
        </div>
    </nav>
)

