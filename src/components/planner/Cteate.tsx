import { useEffect, useState } from 'react'
import Create_Form from './Create_Form'
import Create_Result from './Create_Result'

const Create = ({ setIsCreate }) => {
  return <Create_Form setIsCreate={setIsCreate} />
}

export default Create
