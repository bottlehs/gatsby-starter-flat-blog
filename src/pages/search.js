import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import _ from 'lodash'
import Bio from '../components/bio'
import { Category } from '../components/category'
import { useCategory } from '../hooks/useCategory'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CATEGORY_TYPE } from '../constants'

// Utilities
import kebabCase from 'lodash/kebabCase'

const SearchPage = ({ data, location }) => {
  let query = location.search.split("=");
  query = query[1];
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.nodes.filter(( { frontmatter }) => {
    const titleMatch = frontmatter.title
      .toLowerCase()
      .includes(query.toLowerCase())
    const topicMatch = frontmatter.category
      .toLowerCase()
      .includes(query.toLowerCase())
    const tagsMatch = frontmatter.tags
      .map(tag => tag.toLowerCase())
      .some(tag => tag.includes(query.toLowerCase()))
    const descriptionMatch = frontmatter.description
      .toLowerCase()
      .includes(query.toLowerCase())

    return titleMatch || topicMatch || tagsMatch || descriptionMatch
  })

  const categories = useMemo(
    () => _.uniq(posts.map(({ frontmatter }) => frontmatter.category)),
    []
  )
  const [category, selectCategory] = useCategory()  
  const refinedPosts = useMemo(() =>
    posts
      .filter(
        ({ frontmatter }) => {
          return category === CATEGORY_TYPE.ALL ||
          frontmatter.category === category
        }
      )
      .slice(0, 1000 /*count * countOfInitialPost*/)
  )

  if (refinedPosts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={query} />
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
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Category
        categories={categories}
        category={category}
        selectCategory={selectCategory}
      />
      <div className="post-list-contaner">
        <ol style={{ listStyle: `none` }}>
          {refinedPosts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url" title={title}>
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    {post.frontmatter.thumbnail && (
                      <div className="post-list-thumbnail">
                        <img src={post.frontmatter.thumbnail} alt="" />
                      </div>
                    )}
                    <div className="post-list-content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                      {post.frontmatter.tags && (
                        <ul>
                          {post.frontmatter.tags.map((tag) => {
                            return (
                              <li key={tag}>
                                <a href={`/tags/${kebabCase(tag)}/`}>{tag}</a>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default SearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          category
          description
          tags
          thumbnail
        }
      }
    }
  }
`
