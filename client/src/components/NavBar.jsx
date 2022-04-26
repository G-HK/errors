import React, { Component } from 'react'
import { Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-brand border-bottom box-shadows">
                    <Link class="nav-item nav-link text-dark fa-solid" to="/"> Home </Link>
                    <Link class="nav-item nav-link text-dark fa-solid" to="/Listpage"> Listpage </Link>
                    <Link class="nav-item nav-link text-dark fa-solid" to="/About"> About </Link>
                    <Link class="nav-item nav-link text-dark fa-solid" to="/Contact"> Contact </Link>
                </nav>
            </header>
        )
    }
}
