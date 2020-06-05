import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = ({data}) => {
  return <h2> Category template</h2>
}

export const query = graphql`


query GetCategories($category: String) {
  allMdx(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {category: {eq: $category}}}) {
    nodes {
      excerpt
      id
      frontmatter {
        title
        author
        category
        date(formatString:"MMMM Do, YYYY ")
        slug
        readTime
        image {
          childImageSharp{
            fluid{
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`



export default CategoryTemplate
