import React from 'react'
import { Image } from 'rebass'

export default ({ size = 32, ...props }) => (
  <Image
    {...props}
    src="https://avatars0.githubusercontent.com/u/40970351?s=460&u=86b5582ecbc72376e4c0c3226be04d6b6d352ae9&v=4"
    alt="Kingofdev's avatar"
    width={size}
    height={size}
    sx={{ borderRadius: '50%', overflow: 'hidden', mr: 3, ...props.sx }}
  />
)
