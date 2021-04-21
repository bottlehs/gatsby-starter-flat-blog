import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const resumes = data.allMarkdownRemark.nodes
  console.log(resumes)
  const resume = 0 < resumes.length ? resumes[0] : {}

  if (resumes.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="About" />
        <p>
          No blog about found. Add markdown posts to "content/__about" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
        <hr />
        <footer>
          <Bio />
        </footer>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <section
        dangerouslySetInnerHTML={{ __html: resume.html }}
        itemProp="articleBody"
      />
      <hr />
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: null } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
