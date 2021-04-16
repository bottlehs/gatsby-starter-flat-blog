import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

const _ = require("lodash")

const Tag = ({ tags }) => {
  return (
    <ul className="blog-post-tag">
      {tags.map(tag => {
        return (
          <li key={tag}>
            <Link
              to={`/tags/${kebabCase(tag)}/`}
              itemProp="url"
              title={tag}
            >
              {tag}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

Tag.defaultProps = {
  tags: [],
}

Tag.propTypes = {
  tags: PropTypes.array,
}

export default Tag
