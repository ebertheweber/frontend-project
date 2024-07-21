import { config } from '@/helpers/config'
import React from 'react'

const ButtonCallNow = () => {
  return (
    <a href={`tel:${config.contact.info.phone1.value}`} className="btn btn-outline-primary">CALL NOW</a>
  )
}

export default ButtonCallNow