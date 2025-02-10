import { Link } from "react-router-dom";
import { GenderCheckBox } from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [error, setError] = useState(""); // To display error messages
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Password validation logic
    if (inputs.password === inputs.username || /^(.)\1*$/.test(inputs.password)) {
      setError("Password is invalid. It cannot be the same as the username or consist of matching numbers.");
      return;
    }

    // Additional validation for confirm password
    if (inputs.password !== inputs.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const response = await signup(inputs);
    
    if (response.error) {
      setError(response.error); // Set error message if any
    } else {
      setError(""); // Clear error on success
    }
  };

  return (
    <div className="flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-Jxl font-semibold text-center">
          Sign Up
          <span className="text-red-700 block mt-2">
            Welcome To Umbrella Cooperation Chatting Web
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name..."
              className="w-full input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="w-full input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            {"Already"} have an account?
          </Link>

          {error && <p className="text-red-600 mt-2">{error}</p>} {/* Display error message */}

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
