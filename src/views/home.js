import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marvelous Glistening Scorpion</title>
        <meta property="og:title" content="Marvelous Glistening Scorpion" />
      </Helmet>
      <h1 className="home-text">neuro-gpt.com</h1>
    </div>
  )
}

export default Home
