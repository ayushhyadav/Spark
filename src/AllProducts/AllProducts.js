import React from 'react';
import './AllProducts.css';

const AllProducts = () => {

  // Define an array of product objects
  const products = [
    { id: 1, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/PJX 10G.webp', isNew: true },
    { id: 2, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/PJX R30.webp', isNew: false },
    { id: 3, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/Sovixwatch2.webp', isNew: false },
    { id: 4, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/Sovixwatch2.webp', isNew: false },

    // Add more product objects here...
  ];

  return (
    <div className='container top-page'>
      <h1 className='prodect-heading'>All Products</h1>
      {/* Iterate over the products array */}

      <div className="row" >
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="items-prodects">
              {/* Render a new badge if the product is new */}
              {product.isNew && <span className="badge bg-secondary position-absolute">NEW</span>}
              <div className='img-item'>
                <a href='/Mobile'>
                  <img src={product.image} alt="" />
                </a>
              </div>
              <p>{product.name}</p>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AllProducts;