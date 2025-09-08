import React from 'react'
import { Helmet } from "react-helmet-async";

export default function Forbidden() {
  return (
    <>
      <Helmet>
        <title>Cardio Vision | 403 Forbidden</title>
      </Helmet>
      <div>Forbidden</div>
    </>
  )
}
