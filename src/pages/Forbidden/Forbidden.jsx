import React from 'react'
import { Helmet } from "react-helmet-async";

export default function Forbidden() {
  return (
    <>
      <Helmet>
        <title>Swift Cart | 403 Forbidden</title>
      </Helmet>
      <div>Forbidden</div>
    </>
  )
}
