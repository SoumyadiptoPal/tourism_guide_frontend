import React, { useContext } from 'react';
import Context from '../Context/Context';

const Home = () => {
  const { userAuth } = useContext(Context);

  const onSubmit = () => {
    //const userData = localStorage.getItem("userData");
    //alert(userData.token);
    const res = userAuth({title: "HELLO World"});
  }
  return (
    <>
    <div>Home
      {/* Temporary Button to test JWT functionality */}
    <button
          type="submit"
          className="button btn-outline-success"
          onClick={onSubmit}>Authenticate</button>
    </div>
    </>
  )
}

export default Home