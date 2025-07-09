import React from 'react'
import Hero from './hero/Hero';
import Spots from './spot/Spots';
import Guide from './guide/Guide';
import Tips from './tips/Tips';
import Contact from './contact/Contact';
import Layout from '../../partials/Layout';

const Home = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <Spots/>
            <Guide/>
            <Tips/>
            <Contact/>
        </Layout>
    </>
  );
};
export default Home;