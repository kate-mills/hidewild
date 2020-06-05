import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
//...GatsbyImageSharpFluid

const query = graphql`
  {
    allInstaNode {
      nodes {
        localFile {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode: { nodes },
  } = data
  return (
    <Wrapper>
      <Title title="instagram" />
      <div className="images">
        {nodes.map((item, index) => {
          return (
            <Image key={index} fluid={item.localFile.childImageSharp.fluid} />
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
