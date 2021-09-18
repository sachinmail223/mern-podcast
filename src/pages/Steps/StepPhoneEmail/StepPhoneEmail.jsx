import React from 'react'
import Button from "../../../components/shared/Button/Button";

const StepPhoneEmail = ({nextStep}) => {
    return (
        <div>
            StepPhoneEmail
            <Button text="Next" onClick={nextStep}></Button>
        </div>
    )
}

export default StepPhoneEmail
