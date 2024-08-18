import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'
// import auth from '../firebase/firebase'
import '../CSS/Credentials.css';
import Button from '@mui/material/Button';
import lock_img from '../assets/lock.png';
import { Navigate } from 'react-router-dom';

function Credentials() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowButtonClicked, setIsShowButtonClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for navigation

  // const auth = getAuth();
  console.log(auth);

  const submit = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setIsLoggedIn(true); // Set state to true on successful login
    } catch (error) {
      console.error('Error code: ', error.code);
      console.error('Error message: ', error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <div className='login_container'>
      {/* Top Section */}
      <div className='content_container'>
        <img className='lock_img' src={lock_img} alt='lock'/>
        <div>
          <h4>Authentication required</h4>
          <p>Username and password are required</p>
        </div>
      </div>

      {/* Mid Section */}
      <div className='middle_section_css'>
        <div className='input_container'>
          <h4>Email:</h4>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='input_container'>
          <h4>Password:</h4>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bottom_section_css'>
        <Button variant="contained" onClick={() => setIsShowButtonClicked(!isShowButtonClicked)}>
          {!isShowButtonClicked ? 'Click to show email and password' : 'Hide information'}
        </Button>
        <Button variant="contained" onClick={submit}>Login</Button>
      </div>

      {isShowButtonClicked && <p>Email: frank@foot.com, Password: 123456</p>}
    </div>
  );
}

export default Credentials;
