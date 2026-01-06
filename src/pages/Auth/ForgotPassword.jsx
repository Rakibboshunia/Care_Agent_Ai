import logo from "../../../public/logo.png"

export default function ForgotPassword() {

  return (
    <div className="min-h-screen bg-background-main flex flex-col">
      {/* TOP ORANGE BAR */}
      <div className="h-20 bg-[#E7772E]" />

      {/* LOGIN CARD */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-22">
          {/* LOGO */}
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="" />
          </div>

          {/* TITLE */}
          <h2 className="text-center text-2xl text-[#E7772E] font-semibold mb-1 pb-4">
            Forgot Password?
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Please enter your email to get verification code
          </p>

          {/* FORM */}
          <form className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600 block mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-[#E7772E] rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E7772E]"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#E7772E] text-white py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
