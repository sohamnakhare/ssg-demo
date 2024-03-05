import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'


export default function Page(props: any) {
  const { author, description } = props.pageContext

  return (
    <>
      <h1>{author}</h1>
      <p>{description}</p>
    </>
  )
}

