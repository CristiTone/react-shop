import React, { useEffect, useState } from 'react';
import { sanityClient } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

async function getSanityData() {
  const productQuery = '*[_type == "product"]';
  const products = await sanityClient.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await sanityClient.fetch(bannerQuery);

  return [products, bannerData];
}

const Home = () => {
  const [products, setProducts] = useState(null);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSanityData().then((data) => {
      setProducts(data[0]);
      setBanner(data[1]);
      setLoading(false);
    });
  }, []);

  if (loading) return 'Loading...';

  return (
    <div>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>There are many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={banner && banner[0]} />
    </div>
  );
};

export default Home;
