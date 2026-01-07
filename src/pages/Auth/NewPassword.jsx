import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../../public/logo.png"

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background-main flex flex-col">
      <div className="h-20 bg-[#E7772E]" />

      {/* LOGIN CARD */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-18">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="" />
          </div>

          {/* TITLE */}
          <h2 className="text-center text-[#E7772E] text-3xl font-semibold mb-1 pb-2">
            Set a new password
          </h2>
          <p className="text-center text-md text-gray-700 mb-6">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>

          {/* FORM */}
          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                New Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="w-full border border-[#E7772E] rounded-md px-3 py-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#E7772E]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="w-full border border-[#E7772E] rounded-md px-3 py-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#E7772E]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E7772E] text-white py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
