import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CurrencyContext, CartContext, UserContext } from '../Context';
import logo from '../logo.svg';
import axios from 'axios';


function Product(props){
    const baseUrl = 'http://3.88.1.181:8000'

    const [products, setProducts] = useState([])
    const [totalResults, setTotalResults] = useState(0)

    const {productData, setProductData} = useContext(ProductContext);
    
    const userContext = useContext(UserContext)

    //const products = useContext(ProductContext)

    useEffect(() => {
        fetchData(baseUrl+'/products/public/catalog');
    }, [])


    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.results);
            setTotalResults(data.count) 
        })
    }
    
    return (
    <>
        {/**Product box */}
        <div className="col-12 col-md-3 col-sm-4 mb-4">
            <div className="card">
                <Link to='#'>
                    <img src={props.product.image} className="card-img-top" style={imgStyle} alt={props.product.image} />
                </Link>
            <div className="card-body">
                <h4 className="card-title">
                    <Link to='#'>
                        {props.product.title}
                    </Link>
                </h4>
                
                {/**<h5 className="card-title text-muted">Price: {props.product.price}</h5>*/}
                    
                    
            </div>
                <div className="card-footer">
                        
                </div>
            </div>
        </div>
        
    </>
    )
}

export default SingleProduct