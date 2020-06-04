import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import {Link} from "gatsby"
// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
  return(
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>In progress!</span>
          <h3>Store is coming soon!</h3>
          <Link to="/" className="btn">back</Link>
        </div>
      </section>
    </Layout>
  )
}

export default PostsPage
