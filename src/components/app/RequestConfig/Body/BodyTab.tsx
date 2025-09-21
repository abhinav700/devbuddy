import React from 'react'
import JsonEditor from './JsonEditor'

type props = {
  requestFormState: RequestFormData,
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>,
}

const BodyTab = ({requestFormState, setRequestFormState} : props) => {
  return (
    <>
      <JsonEditor/>
    </>
  )
}

export default BodyTab