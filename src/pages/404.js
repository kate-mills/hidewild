import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>Oops!</span>
          <h3>Sorry, the page you tried can not be found.</h3>
          <Link to="/" className="btn">
            back
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
