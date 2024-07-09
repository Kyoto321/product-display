import { useState, useEffect } from 'react';

import React from 'react';
import logo from '../../assets/logo.svg';
import clock from '../../assets/clock.svg';
import search from '../../assets/search.svg';
import profileimg from '../../assets/profileimg.jpg';
import vector from '../../assets/vector.svg';

import useAxiosFetch from '../../hooks/useAxiosFetch';

import'./nav.css';



const Nav = () => {
    const { data } = useAxiosFetch('http://3.88.1.181:8000/products/public/catalog');
    
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResults] = useState([]);
  


    useEffect(() => {
        setProducts(data);
    }, [data])

    useEffect(() => {
        const filteredResults = products.filter((product) =>
            ((product.description).toLowerCase()).includes(search.toLowerCase())
            || ((product.name).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [products, search])

  return (
 
        <div className="nav">
            <div className='logo'>
                <div className='logo-name'>
                    <img src={logo} alt='logo' />
                    <h3>Unlimi</h3><h1>.</h1>
                </div>
            </div>
            
            <div className='navbar-side'>
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    
                    <label htmlFor="search">
                        <img src={search} alt='search' />
                       
                        </label>
                        <input
                            id="search"
                            type="text"
                            placeholder="Search by Products"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                </form>
                <div className='navbar-profile'>
                    <div className='clock'>
                        <img src={clock} alt='clock' />
                    </div>
                    <div className='navbar-profile-info'>
                        <img src={profileimg} alt='profileimg' />
                        <h3>Deko</h3>
                        
                    </div>

                    <div className='vector'>
                        <img src={vector} alt='vector' />
                    </div>
                </div>
            </div>


            

        </div>

  )
}

export default Nav