import React from 'react'
import './Tags.scss'

export default function Tags(props) {
  const tags = props.tags
  return (
    <div>
      <div className='apartTags'>{tags.map((tag , index) => (<span className='tag' key={index}>{tag}</span>))}</div>
    </div>
  )
}
