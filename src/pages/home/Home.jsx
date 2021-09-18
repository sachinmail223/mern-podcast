import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
const signInLinkStyle = {
  color: '#0077ff',
  fontWeight: 'bold',
  textDecoration:'none',
  marginLeft:'10px'
}
const history = useHistory()
const startRegistration = ()=>{
  history.push('/register')
}


  return (
   <div className={styles.cardWrapper}>
       <Card title="Welcom to Codershouse" icon="logo">
       <p className={styles.text}>
        We’re working hard to get Codershouse ready for everyone! While we wrap
        up the finishing youches, we’re adding people gradually to make sure
        nothing breaks
      </p>
      <div>
      <Button text="Get your username" onClick={startRegistration}></Button>
          <div className={styles.singingWrapper}>
              <span className={styles.hasInvite}>Have an invite code</span>
              <Link style={signInLinkStyle} to="/login"> Sing in</Link>
          </div>
      </div>
       </Card>
 
   </div>
  );
};

export default Home;
