import React from 'react'
import Nav from './nav'

import './scss/App.scss';
import './scss/option.scss'


export default function() {
  return (
    <div class="wrapper">
      <Nav/>
      <table id="option">
        <tr>
          <td>まごころ特急便（3日以内お急ぎの方）</td>
          <td>2,200円</td>
        </tr>
        <tr>
          <td>初回・ご愛顧プラン</td>
          <td>12,000円</td>
                    
        </tr>
        <tr>
          <td>春、秋お彼岸・盆前・御命日　お掃除　5回</td>
          <td>49,900円</td>
          <td class="famous">← 一番人気です！</td>
        
        </tr>
        <tr>
          <td>毎月しっかりお掃除</td>
          <td>100,800円	</td>
                    
        </tr>
        <tr>
          <td>年2回お掃除</td>
          <td>23,000円	</td>
        </tr>
        <tr>
          <td>お参りのみ</td>
          <td>5,000円</td>
        </tr>
        <tr>
          <td>強力水垢取り</td>
          <td>2,800円</td>
        </tr>
        <tr>
          <td>植木伐採</td>
          <td>4,000円</td>
        </tr>
        <tr>
          <td>目地コーティング</td>
          <td>8,000円</td>
        </tr>
        <tr>
          <td colspan='2'>遠隔お参り（スマートフォンなどテレビ電話が可能な方）</td>
        </tr>
        <tr>
          <td>お電話相談</td>
          <td>午前</td>
                  
        </tr>
        <tr>
          <td>お供え物</td>
          <td>ご相談ください</td>
        </tr>
        <tr>
          <td>まごころ</td>
          <td>年中無料</td>
        </tr>
      </table>

      <p>その他ご要望・ご質問などございましたらお気軽にお問い合わせください。</p>

    </div>
  )
}