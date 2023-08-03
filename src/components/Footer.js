import React from 'react'
import {Link} from 'react-router-dom'

import MapContainer from '../Map'

import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import YouTubeIcon from '@mui/icons-material/YouTube' 
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="left-footer">
          <div className="contact-us">
            <h1>contact us</h1>
            <div className="contact">
              <Link to="mailto:www.jyotipriyamallick2019@gmail.com" target="_blank"> <EmailIcon /> email us</Link>
              <Link to="tel:9775064980"> <CallIcon /> call us</Link>
            </div>
            <div className="social-icons">
              <Link to="https://www.youtube.com/channel/UC26baN87Fp8p2vip3aHKFWw" target="_blank"> <YouTubeIcon /> </Link>
              <Link to="https://www.instagram.com/ff_nickop/" target="_blank"> <InstagramIcon /> </Link>
              <Link to="https://twitter.com/DMistry91851182" target="_blank"> <TwitterIcon /> </Link>
              <Link to="https://www.linkedin.com/in/debraj-mistry-b60338233" target="_blank"> <LinkedInIcon /> </Link>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <form>
            <div className="footer-name-email">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <textarea name="Message" placeholder="Your Message"></textarea>
            <button type="submit" className="footer-form-submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <MapContainer />
        <p>copyright @ nxtBrothers</p>
      </div>
    </footer>
  )
}

export default Footer