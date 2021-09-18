import React from 'react'
import Button from "../../../components/shared/Button/Button";
const StepAvatar = ({nextStep}) => {
    return (
        <div>
            StepAvatar
            <Button text="Next" onClick={nextStep}></Button>
        </div>
    )
}

export default StepAvatar
