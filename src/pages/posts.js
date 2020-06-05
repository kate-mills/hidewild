import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

const PostsPage = ({ data }) => {
  const {
    allMdx: { posts },
  } = data
  return (
    <Layout>
      <SEO title="Posts" />
      <Hero />
      <Posts posts={posts} title="all creations & obsessions" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
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
