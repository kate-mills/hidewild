import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagram className="social-icon instagram-icon"></FaInstagram>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
