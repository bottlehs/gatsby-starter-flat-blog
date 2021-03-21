import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const resumes = data.allMarkdownRemark.nodes
  const resume = 0 < resumes.length ? resumes[0] : {}

  if (resumes.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog about found. Add markdown posts to "content/__about" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <section
        dangerouslySetInnerHTML={{ __html: resume.html }}
        itemProp="articleBody"
      />
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
      filter: { frontmatter: { category: { eq: "about" } } }
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
