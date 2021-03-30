import React, { useMemo } from 'react';
import cn from 'classnames';

export default function TableOfContents({ items, currentHeaderUrl }) {
  const replaceItems = useMemo(() => {
    if (currentHeaderUrl) {
      return items.replace(
        `"${currentHeaderUrl}"`,
        `"${currentHeaderUrl}" class="isCurrent"`
      );
    } else {
      return items;
    }
  }, [currentHeaderUrl]);
  return items ? (
    <nav className={cn('table-of-contents', 'container')}>
      <h3 className={'title'}>Table of contents</h3>
      <div
        className={'contents'}
        dangerouslySetInnerHTML={{ __html: replaceItems }}
      />
    </nav>
  ) : null;
}