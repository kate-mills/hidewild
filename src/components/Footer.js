import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>
          Hide + Wild &copy;{new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
