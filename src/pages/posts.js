import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql, Link } from 'gatsby'
import Posts from '../components/Posts'
//
// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
  return(
    <Layout>
      <Hero/>
      <section className="mdx-page">
        <div className="">
          <h3>Posts</h3>
          <Link to="/" className="btn">back</Link>
        </div>
      </section>
    </Layout>
  )
}

export default PostsPage

