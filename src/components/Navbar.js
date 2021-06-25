import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../constants/routes'


// Icons
import { AiOutlineFire, AiOutlineSearch } from 'react-icons/ai'
import { RiMovie2Line, RiFileListLine } from 'react-icons/ri'
import { FaTv } from 'react-icons/fa'

const Navbar = () => {
    return (
        <Navmain>
            <NavItem to={ROUTES.Trending} activeClassName="active">
                <AiOutlineFire /> <span>Trending</span>
            </NavItem>
            <NavItem to={ROUTES.Movies} activeClassName="active">
                <RiMovie2Line /> <span>Movies</span>
            </NavItem>
            <NavItem to={ROUTES.Series} activeClassName="active">
                <FaTv /> <span>Series</span>
            </NavItem>
            <NavItem to={ROUTES.Genres} activeClassName="active">
                <RiFileListLine /> <span>Genres</span>
            </NavItem>
            <NavItem to={ROUTES.Search} activeClassName="active">
                <AiOutlineSearch /> <span>Search</span>
            </NavItem>
        </Navmain>
    )
}

const Navmain = styled.nav`
    padding: 20px;
    display: flex;
`

const NavItem = styled(NavLink)`
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;

    &.active {
        box-shadow: 2px 4px 10px rgba(0, 0, 0, .3);
    }

    span {
        margin-left: 5px;
    }
`

export default Navbar
