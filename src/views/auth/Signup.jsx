import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";

export default function Signup() {
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign Up
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign up!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign Up with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>

        <div className="flex gap-1">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Name*"
            placeholder="Name"
            id="name"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Occupation*"
            placeholder="Occupation"
            id="Occupation"
            type="text"
          />

        </div>
        <div className="flex gap-1">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Residence*"
            placeholder="Residence"
            id="Residence"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Destination*"
            placeholder="Destination"
            id="Destination"
            type="text"
          />

        </div>
        <div className="flex gap-1">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Specialy Abled*"
            placeholder="Specialy Abled"
            id="Specialy Abled"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Anything More*"
            placeholder="Anything More"
            id="Anything More"
            type="text"
          />

        </div>
        <div className="flex gap-1">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Residence*"
            placeholder="Residence"
            id="Residence"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Destination*"
            placeholder="Destination"
            id="Destination"
            type="text"
          />

        </div>
        <label htmlFor="route" className="block font-medium mb-1">Select Route*</label>
        <select
          className="auth mb-3 w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id="route"
          name="route"
        >
          <option value="">Select Route</option>
          <option value="route1">Ngong to Kamakis</option>
          <option value="route1">Ngong to CBD via South C</option>
          <option value="route1">Thika to CBD,Archive</option>
        
        </select>
        

        <div className="flex gap-1">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="name@email.com"
            id="email"
            type="text"
          />


          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />
        </div>

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign Up
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
