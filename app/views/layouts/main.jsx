import React from 'react'

class DefaultLayout extends React.Component {
  render () {
    return (
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" itemscope itemtype="http://schema.org/Article">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="mask-icon" sizes="any" href="/svg/favicon.svg" color="#55acee" />
          <link rel="icon" href="/svg/favicon.ico" type="image/x-icon" />
          <title>{this.props.title}</title>

          {/* Import materialize.css */}
          <link type="text/css" rel="stylesheet" href="/css/materialize.min.css"  media="screen,projection"/>
          <link type="text/css" rel="stylesheet" href="/css/custom.css"  media="screen,projection"/>

          {/* Let browser know website is optimized for mobile */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="stylesheet" type="text/css" href="/css/app.css" />
        </head>
        <body>
          {this.props.children}

          {/* Import jQuery before materialize.js */}
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script type="text/javascript" src="js/materialize.min.js"></script>
          <script src="/js/bundle.js"></script>
        </body>
      </html>
    )
  }
}

export default DefaultLayout
