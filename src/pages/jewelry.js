import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const Jewelry = () => {
  return (
    <Layout>
      <SEO title="Jewelry"/>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Store coming soon!</h2>
          <h4>
            Subscribe to our newsletter to get the latest on Hilary and her creations.
          </h4>
          <Link to="/newsletter" className="btn btn-center">subscribe</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Jewelry
