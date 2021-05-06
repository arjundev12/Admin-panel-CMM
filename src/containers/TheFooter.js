import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
     
        <span className="ml-1">callmymover & 2021 Reserved</span>
      </div>
      <div className="mfs-auto">
    
        <h5  rel="noopener noreferrer">Powered by Winklix</h5>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
