import { useContext, useEffect, useState  } from 'react';
import { UserContext, } from '../../context/DataContext';

import React from 'react';

import Table from "../table/Table"

const Home = () => {
        const [data, setData] = useState([]);
        const userContext = useContext(UserContext);
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await fetch("http://3.88.1.181:8000/products/public/catalog");
            const products = await response.json();
            console.log(products)
            setData(products);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

  
    return (
  
       <div className='product'>
            <h3>Department post</h3>
            <div>
                
                {
                    userContext.login == true  && <Table data={data} /> 
                }
             </div>
       </div>

    )

}

export default Home