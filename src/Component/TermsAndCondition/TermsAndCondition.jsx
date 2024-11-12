import React from 'react'
import { termsAndConditions } from '../../content/termsAndCondition';
import "./TermsAndCondition.css";

const TermsAndCondition = ({ content, heading }) => {
  return (
    <div className='terms-wrapper'>
      <div className='terms-head-wrapper'>
        <h1 className='terms-head'>{heading}</h1>
      </div>
      <div className='terms-content-wrapper'>
        {content.map((item) => (
          <div key={item.id} style={{ marginBottom: '30px' }} className=''>
            <h2 className='terms-content-head'>{item.heading}</h2>
            <p className='terms-content-para'>
              {item.para.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TermsAndCondition