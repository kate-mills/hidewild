import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Link } from 'gatsby'
const Jewelry = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Store coming soon!</h2>
          <h4>
            Sign up for our newsletter to get the latest on Hilary and her
            creations.
          </h4>
          <Link to="/newsletter" className="btn btn-center">
            sign up
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Jewelry
