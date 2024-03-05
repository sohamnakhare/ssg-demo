import * as React from "react"
import { graphql } from "gatsby"

export default function Page(props: any) {
  const { message } = props.pageContext

  return (
    <>
     <img src={message} />
    </>
  )
}