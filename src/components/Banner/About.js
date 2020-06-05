import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const getImg = graphql`
  {
    person: file(relativePath: { eq: "hilary.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const About = () => {
  const data = useStaticQuery(getImg)
  return (
    <Wrapper>
      <Title title="About Hilary" />
      <Image fixed={data.person.childImageSharp.fixed} className="img" />
      <p>I'm baby fixie lomo hoodie street art fashion axe chicharrones!</p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
