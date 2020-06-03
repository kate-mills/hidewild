import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export const query = graphql`
  {
    person: file(relativePath: {eq: "leather.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({showLeather}) => {
  const {person} = useStaticQuery(query)
  return(
    <header className="hero">
      { showLeather && (
        <Image fluid={person.childImageSharp.fluid} className="hero-person"/>
      )}
    </header>
  )
}

export default Hero
