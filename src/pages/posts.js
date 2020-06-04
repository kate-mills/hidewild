import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql, Link } from 'gatsby'
import Posts from '../components/Posts'
//
const PostsPage = ({ data }) => {
  const {allMdx: {posts}} = data
  return(
    <Layout>
      <Hero/>
      <Posts posts={posts} title="all creations & obsessions" />
    </Layout>
  )
}


export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      posts:nodes {
        excerpt
        frontmatter {
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          title
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default PostsPage

