import React, { useCallback, useRef } from 'react'
import './index.css'
import { Item } from './item'

export const Category = ({ categories, category, selectCategory }) => {
  const containerRef = useRef(null)

  const scrollToCenter = useCallback(tabRef => {
    const { offsetWidth: tabWidth } = tabRef.current
    const { scrollLeft, offsetWidth: containerWidth } = containerRef.current
    const tabLeft = tabRef.current.getBoundingClientRect().left
    const containerLeft = containerRef.current.getBoundingClientRect().left
    const refineLeft = tabLeft - containerLeft
    const targetScollX = scrollLeft + refineLeft - (containerWidth / 2) + (tabWidth / 2)

    containerRef.current.scroll({ left: targetScollX, top: 0, behavior: 'smooth' })
  }, [containerRef])

  return (
    <ul
      ref={containerRef}
      className="category-container"
      role="tablist"
      id="category"
    >
      <Item title={'All'} selectedCategory={category} onClick={selectCategory} scrollToCenter={scrollToCenter} />
      {categories.map((title, idx) => (
        <Item
          key={idx}
          title={title}
          selectedCategory={category}
          onClick={selectCategory}
          scrollToCenter={scrollToCenter}
        />
      ))}
    </ul>
  )
}
