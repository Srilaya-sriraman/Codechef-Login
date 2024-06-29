import React, { useEffect, useState } from 'react';
import logo from '../../public/logo.png';
import profileIcon from '../../public/profile.png';
import lockIcon from '../../public/lock.png';
import eyeIcon from '../../public/eye.png';
import eyecloseIcon from '../../public/eyeclose.png';

const Login = ({ setView }) => {
  const [background, setBackground] = useState(window.innerWidth > 768 ? 'backgroundd.png' : 'backgroundmob.png');
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handlePassword(event) {
     let new_pass = event.target.value;
     setPassword(new_pass);
     var lowerCase = /[a-z]/g;
     var upperCase = /[A-Z]/g;
     var numbers = /[0-9]/g;
     if (!new_pass.match(lowerCase)) {
        setErrorMessage("Password should contains lowercase letters!");
     } else if (!new_pass.match(upperCase)) {
        setErrorMessage("Password should contain uppercase letters!");
     } else if (!new_pass.match(numbers)) {
        setErrorMessage("Password should contains numbers also!");
     } else if (new_pass.length < 10) {
        setErrorMessage("Password length should be more than 10.");
     } else {
        setErrorMessage(""); 
     }
  }
  const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
const [email, setEmail] = useState('');
const [errorMessage2, setErrorMessage2] = useState("");
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};
function handleEmail(event) {
    const new_email = event.target.value;
    setEmail(new_email);
    if (!validateEmail(new_email)) {
        setErrorMessage2('Please enter a valid email address');
    } else {
        setErrorMessage2('');
    }
};
const [showDetails, setShowDetails] = useState(false);
const[errorMessage3, setErrorMessage3] = useState("");
const handleClick = () => {
    if(setShowDetails) {
        setErrorMessage3("");
    }
    if (!email || !password ||errorMessage!="") {
        setErrorMessage3("Please fill all the fields!");
    } else if (!validateEmail(email)) {
        setErrorMessage3("");
    } 
    else {
        setShowDetails(true);
    }
};
  useEffect(() => {
    const handleResize = () => {
      setBackground(window.innerWidth > 768 ? 'backgroundd.png' : 'backgroundmob.png');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})`, filter: 'blur(2px)' }}
      ></div>
      <div className={`relative bg-white shadow-lg p-8 max-w-md w-full ${window.innerWidth <= 768 ? 'rounded-x' : 'rounded-3xl'}`}>
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-6 text-blue-400">LOGIN</h2>
        <form>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Email ID</label>
            <input type="email" placeholder="someone@example.com" className="w-full pl-10 pr-3 py-2 border rounded-lg border-black" value={email} onChange={handleEmail} autoComplete='email'/>
            <img src={profileIcon} alt="Profile Icon" className="absolute top-11 transform -translate-y-1/2 left-3 w-5 h-5" />
            <div className="text-red-500"> {errorMessage2} </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input type={showPassword ? "text" : "password"} placeholder="********" className="w-full pl-10 pr-10 py-2 border rounded border-black" value = {password} onChange = {handlePassword}/>
            <img src={lockIcon} alt="Lock Icon" className="absolute top-11 transform -translate-y-1/2 left-3 w-5 h-5" />
            <img src={showPassword ? eyeIcon : eyecloseIcon} alt="Eye Icon" className="absolute top-11 transform -translate-y-1/2 right-3 w-5 h-5" onClick={togglePasswordVisibility}/>
            <div className="text-red-500"> {errorMessage} </div>
          </div>
          <div className="flex justify-between mb-4">
            <label className="text-blue-500">
              <input type="checkbox"/> Remember Me
            </label>
            <a href="#" className="text-blue-500">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-3xl font-bold" onClick={handleClick}>Log in</button>
          <div className="text-center mt-4">
            Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setView('signup')}>Sign up</span>
          </div>
          <div className="text-center mt-4 text-red-500">{errorMessage3}</div>
          {showDetails && (
          <div className="text-center mt-4">
            <p className="text-lg mb-2 text-gray-700">{`Email: ${email}`}</p>
        </div>
            )}   
        </form>
      </div>
    </div>
  );
};

export default Login;
