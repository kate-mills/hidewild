import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaEtsy,
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
        <a href="https://instagram.com/hilarymolloydesigns">
          <FaInstagram className="social-icon instagram-icon"></FaInstagram>
        </a>
      </li>
      <li>
        <a href="https://etsy.com/shop/HilaryMolloyDesigns">
          <FaEtsy className="social-icon etsy-icon"></FaEtsy>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
