
import logo from "../../../public/logo.png"

export default function PasswordChanged() {

  return (
    <div className="min-h-screen bg-background-main flex flex-col">
      <div className="h-20 bg-[#E7772E]" />

      {/* LOGIN CARD */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-22">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="" />
          </div>

          {/* TITLE */}
          <h2 className="text-center text-[#E7772E] text-3xl font-semibold mb-4 pb-4">
            Password Updated Successfully
          </h2>
          <p className="text-center text-md text-gray-700 mb-6 pb-4">
            Your new password has been saved. You can now continue securely.
          </p>

          {/* FORM */}
          <form className="space-y-6">
            <button
              type="submit"
              className="w-full bg-[#E7772E] text-white py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
