
import React, { useState } from 'react'
import styles from './Authenticate.module.css'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'


const steps = {
    1:StepPhoneEmail,
    2:StepOtp,
};


const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Stap = steps[step]
    const nextStep=()=>{
        setStep(step+1)
    }

    return (
        <div>
            <Stap nextStep={nextStep}/>
            
        </div>
    )
}

export default Authenticate
