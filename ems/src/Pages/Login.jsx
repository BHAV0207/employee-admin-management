import React from "react";

function Login() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-emerald-500 border-2 p-20">
        <form className="flex flex-col justify-center items-center">
          <input type="email" placeholder="enter your email"  className="bg-transparent border-2 border-emerald-500 outline-none mx-5 py-2 px-4 rounded-md"/>
          <input type="password"  placeholder="enter your password" className="bg-transparent border-2 border-emerald-500 outline-none m-5 py-2 px-4 rounded-md"/>
          <button className="bg-emerald-500 outline-none py-2 px-5 rounded-md text-black">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
