import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
//...GatsbyImageSharpFluid

const query = graphql`
  {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode: { edges },
  } = data
  return (
    <Wrapper>
      <Title title="instagram" />
      <div className="images">
        {edges.map(({ node }) => {
          return (
            <Image key={node.id} fluid={node.localFile.childImageSharp.fluid} />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
