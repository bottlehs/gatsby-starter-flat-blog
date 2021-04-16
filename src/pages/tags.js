import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Utilities
import kebabCase from "lodash/kebabCase"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.group
  if (tags.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All tags" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/posts" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle + " Tags"}>
      <SEO title="All tags" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {tags.map(tag => {
          return (
            <li key={tag.fieldValue}>
              <article
                className="tag-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      itemProp="url"
                      title={tag.fieldValue}
                    >
                      <span itemProp="headline">{tag.fieldValue}</span>
                    </Link>
                  </h2>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: tag.totalCount + " posts" || 0,
                    }}
                    itemProp="count"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
