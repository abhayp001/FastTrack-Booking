// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginRegisterForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const BACKEND_URL = 'http://172.16.70.34:5000'; // Replace with your backend's URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let url, body;

//       if (isLogin) {
//         url = `${BACKEND_URL}/api/auth/login`;
//         body = JSON.stringify({
//           username: formData.username,
//           password: formData.password,
//         });
//       } else {
//         url = `${BACKEND_URL}/api/auth/register`;
//         body = JSON.stringify({
//           name: formData.name,
//           username: formData.username,
//           password: formData.password,
//         });
//       }

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);

//         // Redirect to WelcomePage with the user's name
//         navigate('/main/dashboard', { state: { userName: isLogin ? data.name : formData.name } });
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('An error occurred while processing your request.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center mb-6">{isLogin ? 'Login' : 'Register'}</h2>
//         {message && <div className="text-center mb-4 text-sm text-gray-600">{message}</div>}
//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">Employee Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           )}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-600">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
//           >
//             {isLogin ? 'Login' : 'Register'}
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           {isLogin ? (
//             <p className="text-sm text-black">
//               Don't have an account?{' '}
//               <button onClick={() => setIsLogin(false)} className="text-gray-800 hover:underline">
//                 Sign up
//               </button>
//             </p>
//           ) : (
//             <p className="text-sm text-black">
//               Already have an account?{' '}
//               <button onClick={() => setIsLogin(true)} className="text-gray-800 hover:underline">
//                 Login
//               </button>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginRegisterForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginRegisterForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const BACKEND_URL = 'http://172.16.70.34:5000'; // Replace with your backend's URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let url, body;

//       if (isLogin) {
//         url = `${BACKEND_URL}/api/auth/login`;
//         body = JSON.stringify({
//           username: formData.username,
//           password: formData.password,
//         });
//       } else {
//         url = `${BACKEND_URL}/api/auth/register`;
//         body = JSON.stringify({
//           name: formData.name,
//           username: formData.username,
//           password: formData.password,
//         });
//       }

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);

//         // Redirect to WelcomePage with the user's name
//         navigate('/main/dashboard', { state: { userName: isLogin ? data.name : formData.name } });
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('An error occurred while processing your request.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side: Full Cover Image */}
//       <div
//         className="w-1/2 h-screen bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url("https://img.freepik.com/free-photo/christmas-travel-concept-with-laptop_23-2149573080.jpg?t=st=1735837016~exp=1735840616~hmac=7192957ce562b8f8c126fa935e9c2b2958c7a6928d7cfaf7600000657eddcbc1&w=1380")',
//         }}
//       ></div>

//       {/* Right Side: Centered Form */}
//       <div className="w-1/2 flex items-center justify-center bg-gray-100">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-semibold text-center mb-6">
//             {isLogin ? 'Login' : 'Register'}
//           </h2>
//           {message && <div className="text-center mb-4 text-sm text-gray-600">{message}</div>}
//           <form onSubmit={handleSubmit}>
//             {!isLogin && (
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600">Employee Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             )}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-600">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
//             >
//               {isLogin ? 'Login' : 'Register'}
//             </button>
//           </form>
//           <div className="mt-4 text-center">
//             {isLogin ? (
//               <p className="text-sm text-black">
//                 Don't have an account?{' '}
//                 <button onClick={() => setIsLogin(false)} className="text-gray-800 hover:underline">
//                   Sign up
//                 </button>
//               </p>
//             ) : (
//               <p className="text-sm text-black">
//                 Already have an account?{' '}
//                 <button onClick={() => setIsLogin(true)} className="text-gray-800 hover:underline">
//                   Login
//                 </button>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginRegisterForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginRegisterForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock success action to skip backend check
    const userName = isLogin ? 'Mock User' : formData.name || 'New User';
    setMessage('Login successful!');
    navigate('/main/dashboard', { state: { userName } });
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="w-1/2 h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/christmas-travel-concept-with-laptop_23-2149573080.jpg?t=st=1735837016~exp=1735840616~hmac=7192957ce562b8f8c126fa935e9c2b2958c7a6928d7cfaf7600000657eddcbc1&w=1380")',
        }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md">
        <h2 className="text-3xl text-gray-800font-semibold text-center mb-6">
            FastTrack Booking
          </h2>
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isLogin ? 'Login' : 'Register'}
          </h2>
          {message && <div className="text-center mb-4 text-sm text-green-600">{message}</div>}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Employee Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
          <div className="mt-4 text-center">
            {isLogin ? (
              <p className="text-sm text-black">
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)} className="text-gray-800 hover:underline">
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-sm text-black">
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)} className="text-gray-800 hover:underline">
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterForm;
