import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import style from "./StepPhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ nextStep }) => {
  const [phoneEmail, setPhoneEmail] = useState("phone");
  const PhoneEmail = phoneEmailMap[phoneEmail];
  const email = () => {
    setPhoneEmail("email");
  };
  const phone = () => {
    setPhoneEmail("phone");
  };
  return (
    <>
      <div className={style.cardWrapper}>
          <div>
        <div className={style.buttonWrap}>
          <button className={`${style.tabButton} ${phoneEmail==='phone' ? style.active : ""}`} onClick={phone}>
              <img src="/images/phone-white.png" alt="phone" />
          </button>
          <button className={`${style.tabButton} ${phoneEmail==='email' ? style.active : ""}`} onClick={email}>
          <img src="/images/mail-white.png" alt="email" />
          </button>
        </div>
        <PhoneEmail onClick={nextStep}/>
        
      </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
