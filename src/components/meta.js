import React from 'react'
import Helmet from 'react-helmet'

export default ({
  title = '@kingofdevs/react-gatsby-notebook',
  name = '@kingofdevs/react-gatsby-notebook',
  description = 'Lachlan Campbell’s daily blog, Notebook.',
  image = 'https://notebook-cards.kingofdevs.now.sh/Notebook.png?theme=dark'
}) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={name} />
    <meta name="twitter:title" content={name} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="@kingofdevs/react-gatsby-notebook" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
  </Helmet>
)
