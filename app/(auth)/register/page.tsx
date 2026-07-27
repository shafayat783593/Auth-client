"use client";

import RegisterFrom from "../_components/registerFrom";

export default function RegisterPage() {
  // TODO: role select (CUSTOMER/TECHNICIAN), react-hook-form + zod, call authApi.register()
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Register</h1>
   <RegisterFrom/>
    </div>
  );
}
