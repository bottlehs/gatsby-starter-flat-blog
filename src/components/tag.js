import React from "react"
import PropTypes from "prop-types"
const _ = require("lodash")

const Tag = ({ tags }) => {
  return (
    <ul className="blog-post-tag">
      {tags.map(tag => {
        return (
          <li key={tag}>
            <a href={`/tags/${_.kebabCase(tag)}/`}>{tag}</a>
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
