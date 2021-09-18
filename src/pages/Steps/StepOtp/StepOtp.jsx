import React from 'react'
import Button from "../../../components/shared/Button/Button";
const StepOtp = ({nextStep}) => {
    return (
        <div>
            StepOtp 
            
            <Button text="Next" onClick={nextStep}></Button>
        </div>
    )
}

export default StepOtp
