import React, { useEffect, useState } from 'react';
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import Share from "../components/share"
import TableOfContents from '../components/tableOfContents';
import { DiscussionEmbed } from "disqus-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-regular-svg-icons'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const twitterHandle = "_MsLinda";
  const { previous, next } = pageContext
  const disqusUse = data.site.siteMetadata.disqus.use
  const disqusConfig = {
    shortname: data.site.siteMetadata.disqus.shortname,
    config: { url: location.href, identifier: pageContext.slug, title: siteTitle },
  }  
  const buymeacoffeeUse = data.site.siteMetadata.buymeacoffee.use;
  const buymeacoffeeUrl = data.site.siteMetadata.buymeacoffee.url;
  const tocItems = data.markdownRemark.tableOfContents;
  const isTOCVisible = tocItems.length > 0;
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined);
 
  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl;
      const currentOffsetY = window.pageYOffset;
      const headerElements = document.querySelectorAll('.anchor-header');
      for (const elem of headerElements) {
        const { top } = elem.getBoundingClientRect();
        const elemTop = top + currentOffsetY;
        const isLast = elem === headerElements[headerElements.length - 1];
        if (currentOffsetY < elemTop - HEADER_OFFSET_Y) {
          aboveHeaderUrl &&
            setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1]);
          !aboveHeaderUrl && setCurrentHeaderUrl(undefined);
          break;
        } else {
          isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1]);
          !isLast && (aboveHeaderUrl = elem.href);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >

        {isTOCVisible && (
          <div className={'tocWrapper'}>
            <TableOfContents
              items={tocItems}
              currentHeaderUrl={currentHeaderUrl}
            />
          </div>
        )}

         <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <Share title={post.frontmatter.title} url={location.href} content={post.frontmatter.description} twitterHandle={twitterHandle} tags={post.frontmatter.tags}/>

        {buymeacoffeeUse && (
          <div className="blog-sponsor">
            <Link className="sponsor-button" rel="noopener noreferrer" to={buymeacoffeeUrl} target="_blank">
              <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" /><span>Buy me a coffee</span>
            </Link>
          </div>
        )}
        
        <Tag tags={post.frontmatter.tags} />

        {(previous || next) && (      
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            {previous && (
            <li className="prev">              
              <Link to={previous.fields.slug} rel="prev">
                <div className="icon">
                  <FontAwesomeIcon icon={faArrowAltCircleLeft}  />
                </div>                               
                <div className="text">{previous.frontmatter.title}</div>
              </Link>
            </li>              
            )}
            {next && (          
            <li className="next">
              <Link to={next.fields.slug} rel="next">
                <div className="text">{next.frontmatter.title}</div>                
                <div className="icon">
                  <FontAwesomeIcon icon={faArrowAltCircleRight}  />
                </div>
              </Link>
            </li>
            )}
          </ul>
        </nav>
        )}  

        {disqusUse && (
          <DiscussionEmbed {...disqusConfig} />
        )}
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        disqus {
          use
          shortname
        }
        buymeacoffee {
          use
          url
        }        
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`

const HEADER_OFFSET_Y = 100;