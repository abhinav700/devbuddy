import React from 'react'

type props = {
  requestFormState: RequestFormData,
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>,
}

const BodyTab = ({requestFormState, setRequestFormState} : props) => {
  return (
    <div>BodyTab</div>
  )
}

export default BodyTab