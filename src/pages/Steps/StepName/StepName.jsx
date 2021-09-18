import React from 'react'
import Button from "../../../components/shared/Button/Button";
const StepName = ({nextStep}) => {
    return (
        <div>
            StepName
            <Button text="Next" onClick={nextStep}></Button>
        </div>
    )
}

export default StepName
