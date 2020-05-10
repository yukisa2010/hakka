import React from 'react'
import Nav from './nav'

import './scss/inquiry.scss'

export default function() {
  return (
    <div id="wrapper">
      <Nav/>
      <form>
      <h2>お問合せ</h2>
      <h3>タイトル</h3>
      <p><input type='text'/></p>
      <h3>内容</h3>
      <p>
        <textarea>
        </textarea>
      </p>
      <input type="submit"/>
      </form>
    </div>
  )
}