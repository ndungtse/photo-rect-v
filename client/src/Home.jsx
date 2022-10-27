import React from 'react'
import './App.css';
import Layout from './others/Layout';
import Mainconts from './Home/mainconts';

function Home() {
  return (
    <Layout active={'home'}>
      <Mainconts />
    </Layout>
  );
}

export default Home;
