/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRssSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            instagram
            twitter
            facebook  
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata.author
  const social = data.site.siteMetadata.social
  const avatar = data.avatar.childImageSharp.fixed
  console.log(social);

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author.name && (
        <div>
          <p>
            Written by{" "}
            <Link to={"/about"} className="bio-avatar-name">
              @{author.name}
            </Link>{" "}
          </p>
          {author.summary && (
            <p className="bio-introduction">{author.summary}</p>
          )}
          <ul className="bio-social">
          <li>
              <Link to={`/rss.xml`} target="_blank" itemProp="url" className="social-icon-rss">
               <FontAwesomeIcon icon={faRssSquare}  />
              </Link>
            </li>            
          {social.github && (
            <li>
              <Link to={social.github} target="_blank" itemProp="url" className="social-icon-github">
               <FontAwesomeIcon icon={faGithubSquare}  />
              </Link>
            </li>
          )}
          {social.instagram && (
            <li>
              <Link to={social.instagram} target="_blank" itemProp="url" className="social-icon-instagram">
                <FontAwesomeIcon icon={faInstagramSquare}  />
              </Link>
            </li>
          )}
          {social.twitter && (
            <li>
              <Link to={social.twitter} target="_blank" itemProp="url" className="social-icon-twitter">
               <FontAwesomeIcon icon={faTwitterSquare}  />
              </Link>
            </li>
          )}
          {social.facebook && (
            <li>
              <Link to={social.facebook} target="_blank" itemProp="url" className="social-icon-facebook">
               <FontAwesomeIcon icon={faFacebookSquare}  />
              </Link>
            </li>
          )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Bio
