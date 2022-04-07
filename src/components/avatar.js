import React from 'react'
import { Avatar as Base } from 'theme-ui'

const Avatar = ({ size = 48, ...props }) => (
  <Base
    {...props}
    size={size}
    src="https://i.pinimg.com/564x/4d/e0/61/4de06129ce1d9f886eac6d509f2079f2.jpg"
    alt="Eugene's avatar"
    mr={3}
  />
)

export default Avatar
