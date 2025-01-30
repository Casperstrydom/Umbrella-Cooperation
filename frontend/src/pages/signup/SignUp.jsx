import { GenderCheckBox } from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-Jxl font-semibold text-center">
          Sign Up
          <span className="text-red-700 block mt-2">
            Welcome To Umbrella Cooperation Chatting Web
          </span>
        </h1>

        <form>
          {/* Full Name Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name..."
              className="w-full input-bordered h-10"
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter User Name..."
              className="w-full input-bordered h-10"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="w-full input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="w-full input-bordered h-10"
            />
          </div>

          <GenderCheckBox />

          <a
            href="a"
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            {"Already"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;




//STARTER CODE FROM THE SIGNUP COMPONENT

// import { GenderCheckBox } from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className="flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-Jxl font-semibold text-center">
//           Sign Up
//           <span className="text-red-700 block mt-2">
//             Welcome To Umbrella Cooperation Chatting Web
//           </span>
//         </h1>

//         <form>
//           {/* Full Name Field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name..."
//               className="w-full input-bordered h-10"
//             />
//           </div>

//           {/* Username Field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter User Name..."
//               className="w-full input-bordered h-10"
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password..."
//               className="w-full input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text"> Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password..."
//               className="w-full input-bordered h-10"
//             />
//           </div>

//           <GenderCheckBox />

//           <a
//             href="a"
//             className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
//           >
//             {"Already"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
