import React from 'react'
import Button from "../../../components/shared/Button/Button";
const StepUserName = ({nextStep}) => {
    return (
        <div>
            StepUserName
            <Button text="Next" onClick={nextStep}></Button>
        </div>
    )
}

export default StepUserName
