import logo from "../../../public/logo.png"

export default function VerifyOTP() {

  return (
    <div className="min-h-screen bg-background-main flex flex-col">
      <div className="h-20 bg-[#E7772E]" />
      
      {/* LOGIN CARD */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-20">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="" />
          </div>

          {/* TITLE */}
          <h2 className="text-center text-2xl text-[#E7772E] font-semibold mb-1 pb-4">
            Check your Email
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6 pb-4">
            We sent a code to your email address @. Please check your email for
            the 5 digit code.
          </p>

          {/* FORM */}
          <form className="space-y-6">

            <div className="flex justify-center gap-4 pb-5">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-lg font-semibold border border-[#E7772E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7772E]"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#E7772E] text-white py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
            >
              Verify
            </button>

            <p className="text-center text-sm text-gray-500">
              You have not received the email?{" "}
              <span className="text-[#E7772E] cursor-pointer font-medium hover:underline">
                Resend
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
