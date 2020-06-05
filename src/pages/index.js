import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => {
  const {
    allMdx: { posts },
  } = data
  return (
    <Layout>
      <Hero showLeather />
      <Posts posts={posts} title="Creations & Obsessions" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      posts: nodes {
        excerpt
        frontmatter {
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          title
          readTime
          author
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

export default IndexPage
