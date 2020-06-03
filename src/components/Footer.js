import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
 return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons"/>
        <p>All rights reserved &copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
