"use client";
import { signOut } from "next-auth/react";

function SignOut() {
  return (
    <div>
      <button
        className="px-6 py-2 bg-amarillo text-black font-bold flex justify-center items-center w-fit m-2 rounded-md"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
export default SignOut;
