import React from 'react'
import Nav from './nav'

import './scss/App.scss';
import './scss/company.scss';

export default function() {
  return (
    <div class="wrapper">
      <Nav/>
      
      <div id="company">
      <table>
  <tr>
    <td>会社概要</td>
    <td>B FP株式会社</td>
  </tr>
  <tr>
    <td>屋号</td>
    <td>まごころ手洗い　おはか洗科</td>
  </tr>
  <tr>
    <td>住所</td>
    <td>158-0097　東京都世田谷区用賀2-33-10-305</td>
  </tr>
  <tr>
    <td>設立</td>
    <td>平成30年11月</td>
  </tr>
  <tr>
    <td>代表取締役</td>
    <td>白木健司</td>
  </tr>
  <tr>
    <td>資本金</td>
    <td>1,000,000</td>
  </tr>
  <tr>
    <td>電話番号</td>
    <td>03-6317-3144</td>
  </tr>
  <tr>
    <td>メール</td>
    <td>info@b-fp.net</td>
  </tr>
</table>

<table>
  <tr>
    <td>事業内容</td>
    <td>
    <ul>
      <li>墓石の清掃業</li>
      <li>お墓参り代行業</li>
      <li>開業支援・代理店のコンサルティング業</li>
      <li>各種相談業</li>
    </ul>
    </td>
  </tr>
</table>

      </div>
    </div>
  )
}