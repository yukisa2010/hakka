import React from 'react'
import { Link } from 'react-router-dom'
import './scss/nav.scss'


export default function() {
  return (
  <div id="navbar">
  <ul>
    <li>
      <Link to="/" style={{ textDecoration:'none'}}>
        HOME
      </Link>
    </li>
    <li>
      <Link to="/option" style={{ textDecoration:'none' }}>
      オプション
      </Link>
    </li>
    <li>
      <Link to="/company" style={{ textDecoration:'none'}}>
      会社概要
      </Link>
    </li>
    <li>
      <Link to="/greeting" style={{ textDecoration:'none' }}>
        ごあいさつ
      </Link>
    </li>
    <li>
      <Link to="/inquiry" style={{ textDecoration:'none' }}>
        お問い合わせ
      </Link>
    </li>
  </ul>
</div>

  )
}

