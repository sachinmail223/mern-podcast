import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
const Email = ({onClick}) => {
    return (
        <div>
            <Card title="Enter your email address" icon="email-emoji">
       
      <div>
      <Button text="Next" onClick={onClick} ></Button>
          
      </div>
       </Card>
        </div>
    )
}

export default Email

