import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
const Phone = ({onClick}) => {
    return (
        <div>
            <Card title="Enter your Phone number" icon="phone">
                <TextInput/>
       
      <div>
      <Button text="Next" onClick={onClick} ></Button>
          
      </div>
       </Card>
        </div>
    )
}

export default Phone
