const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="h-full w-full bg-red-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          Login
          <span className="text-red-700 block mt-2">
            Welcome To Umbrella Cooperation Chatting Web
          </span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input-bordered h-10"
            />
          </div>
          <a href='a' className='text-sm hover:underline hover:text-red-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

 //STARTER CODE FOR THIS FILE:
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="h-full w-full bg-red-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
//           Login
//           <span className="text-red-700 block mt-2">
//             Welcome To Umbrella Cooperation Web
//           </span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input-bordered h-10"
//             />
//           </div>
//           <a href='a' className='text-sm hover:underline hover:text-red-600 mt-2 inline-block'>
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

