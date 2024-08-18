import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signOut } from "firebase/auth";
import { Navigate } from 'react-router-dom';

function Home() {
  const [isLoggedOut, setIsLoggedOut] = useState(false); // State for navigation

  async function doSignOut() {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoggedOut(true); // Set the state to trigger redirection
      })
      .catch((error) => {
        // An error happened.
        console.error('Error code: ', error.code);
        console.error('Error message: ', error.message);
      });
  }

  if (isLoggedOut) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      Home page
      <button onClick={doSignOut}>Log out</button>
    </div>
  );
}

export default Home;
