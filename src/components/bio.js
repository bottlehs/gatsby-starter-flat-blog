/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

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
          {social.github && (
            <li>
              <Link to={social.github} target="_blank">
                Github
              </Link>
            </li>
          )}
          {social.instagram && (
            <li>
              <Link to={social.instagram} target="_blank">
                Instagram
              </Link>
            </li>
          )}
          {social.twitter && (
            <li>
              <Link to={social.twitter} target="_blank">
                Twitter
              </Link>
            </li>
          )}
          {social.facebook && (
            <li>
              <Link to={social.facebook} target="_blank">
                Facebook
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
