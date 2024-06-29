import React, { useEffect, useState } from 'react';
import logo from '../../public/logo.png';
import profileIcon from '../../public/profile.png';
import lockIcon from '../../public/lock.png';
import bookIcon from '../../public/book.png';
import eyeIcon from '../../public/eye.png';
import eyecloseIcon from '../../public/eyeclose.png';

const Signup = ({ setView }) => {
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
  const [number, setNumber] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  function handleNumber(event)
  {
    let new_num = event.target.value;
    setNumber(new_num);
    var numbers = /[0-9]/g;
    if (!new_num.match(numbers)) {
        setErrorMessage2("Phone Number should contains numbers only!");
    } else if (new_num.length < 10) {
        setErrorMessage2("Number length should be more than 10.");
    } else {
        setErrorMessage2("");
    }
  }
  const [password2, setPassword2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");
  function handlePassword2(event) {
    const new_pass2 = event.target.value;
    setPassword2(new_pass2);
    if (new_pass2 !== password) {
        setErrorMessage3("Passwords do not match!");
    } else {
        setErrorMessage3("");
    }
}
const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
const [email, setEmail] = useState('');
const [errorMessage4, setErrorMessage4] = useState("");
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};
function handleEmail(event) {
    const new_email = event.target.value;
    setEmail(new_email);
    if (!validateEmail(new_email)) {
        setErrorMessage4('Please enter a valid email address');
    } else {
        setErrorMessage4('');
    }
};
const[firstname,setFirstname]=useState("");
const[lastname,setLastname]=useState("");
const[errorMessage5,setErrorMessage5]=useState("");
const [showDetails, setShowDetails] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        if(setShowDetails) {
            setErrorMessage5("");
        }
        if (!firstname || !lastname || !email || !number || !password || !password2 || errorMessage2!="" || errorMessage!="") {
            setErrorMessage5("Please fill all the fields!");
        } else if (!validateEmail(email)) {
            setErrorMessage5("");
        } else if (password!== password2) {
            setErrorMessage5("");
        } else {
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
      <div className={`relative bg-white shadow-lg p-8 max-w-md w-full mt-6 mb-4 ${window.innerWidth <= 768 ? 'rounded-x' : 'rounded-3xl'}`}>
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-3 text-blue-400">SIGN UP</h2>
        <form>
          <div className="mb-4 relative ">
            <label className="block text-gray-700">Name</label>
            <div className="flex flex-row">
            <input type="text" className="w-full pl-2  py-2 border rounded-lg ml-1 mt-1 border-black" placeholder="First name" value={firstname} onChange={e=>setFirstname(e.target.value)}/>
            <input type="text" className="w-full pl-2 py-2 border rounded-lg mr-1 mt-1 ml-1 border-black" placeholder="Last name" value={lastname} onChange={e=>setLastname(e.target.value)}/>
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Email ID</label>
            <input type="email" placeholder="some.mail@university.com" className="w-full pl-10 pr-3 py-2 border rounded-lg border-black" value={email} onChange={handleEmail}/>
            <img src={profileIcon} alt="Profile Icon" className="absolute top-11 transform -translate-y-1/2 left-3 w-5 h-5" />
            <div className='text-red-500'> {errorMessage4} </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" placeholder="+91 ***** *****" className="w-full pl-10 pr-3 py-2 border rounded-lg border-black" value={number} onChange = {handleNumber}/>
            <img src={bookIcon} alt="Book Icon" className="absolute top-11 transform -translate-y-1/2 left-3 w-5 h-5" />
            <div className="text-red-500"> {errorMessage2} </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input type={showPassword ? "text" : "password"} placeholder="********" className="w-full pl-10 pr-10 py-2 border rounded border-black" value = {password} onChange = {handlePassword}/>
            <img src={lockIcon} alt="Lock Icon" className="absolute top-11 transform -translate-y-1/2 left-3 w-5 h-5" />
            <img src={showPassword ? eyeIcon : eyecloseIcon} alt="Eye Icon" className="absolute top-11 transform -translate-y-1/2 right-3 w-5 h-5" onClick={togglePasswordVisibility} />
            <div className="text-red-500"> {errorMessage} </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" placeholder="********" className="w-full pl-10 pr-10 py-2 border rounded border-black" value = {password2} onChange = {handlePassword2}/>
            <img src={lockIcon} alt="Lock Icon" className="absolute top-11 transform -translate-y-1/2 left-3 w-5 h-5" />
            <div className='text-red-500'> {errorMessage3} </div>
          </div>
          <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-3xl font-bold" onClick={() => handleClick}>Sign Up</button>
          <div className="text-center mt-4">
            Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setView('login')}>Log in</span>
          </div>
        </form>
        <div className="text-center mt-4 text-red-500">{errorMessage5}</div>
        <div>
        {showDetails && (
                <div className="mt-4 text-left">
                    <h2 className="text-3xl mb-4 text-blue-400">User Details</h2>
                    <p className="text-lg mb-2 text-gray-700">{`Name: ${firstname} ${lastname}`}</p>
                    <p className="text-lg mb-2 text-gray-700">{`Email: ${email}`}</p>
                    <p className="text-lg mb-2 text-gray-700">{`Mobile No.: ${number}`}</p>
                </div>
            )}
        </div>
        </div>
      </div>
  );
};

export default Signup;
