import * as React from "react"

export default function Page(props: any) {
  return (
    <>
     <img src={props.serverData.message}/>
    </>
  )
}

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    const result = await res.json()

    return {
      props: result
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}