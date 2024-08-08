import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import logo from '../assets/logo.png';
import userIcon from '../assets/userIcon.svg';
import { navigation } from '../contants/navigation';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    const [searchInput, setSearchInput] = useState(query || '');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchInput.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
        }
    };

    useEffect(() => {
        if (query !== searchInput) {
            setSearchInput(query || '');
        }
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header fixed top-0 w-full h-20 bg-black bg-opacity-70 z-40 shadow-lg ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            <div className='container mx-auto px-4 flex items-center justify-between h-full'>
                <Link to="/">
                    <img
                        src={logo}
                        alt='logo'
                        className='header-logo'
                    />
                </Link>

                <nav className={`header-nav-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navigation.map((nav, index) => (
                        <NavLink
                            key={nav.label + "header" + index}
                            to={nav.href}
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                            onClick={toggleMobileMenu}
                        >
                            {nav.label}
                        </NavLink>
                    ))}
                </nav>

                <div className='header-actions flex items-center gap-6'>
                    <form className='header-search hidden lg:flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='search-input bg-transparent px-4 py-2 outline-none border-none'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='search-button text-3xl text-gold'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='user-icon w-10 h-10 rounded-full overflow-hidden cursor-pointer transition-transform transform hover:scale-110'>
                        <img src={userIcon} alt='User Icon' className='w-full h-full object-cover' />
                    </div>
                </div>

                <div 
                    className={`hamburger lg:hidden ${isMobileMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMobileMenu}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
