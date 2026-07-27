"use client"

import { useActionState, useEffect, useState } from "react"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import toast from "react-hot-toast"
import { loginAction } from "../_action/_authAction";
const LoginFrom = () => {



    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);



    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") ?? ""
    const [state, action, pending] = useActionState(loginAction.bind(null, redirectTo), false)
   



    useEffect(() => {
        if (!state) return;
        if (state.success) {
            
            toast.success(state.message || "Login successfully")
            // router.push("/dashboard")
        }
        if (!state.success) {

            toast.error(state.message || "Login failed")
        }

    }, [state])
    return (
        <>



            {/* Header */}
          

            {/* Error Notification */}
            {errorMessage && (
                <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {errorMessage}
                </div>
            )}

            {/* Form */}
            <form action={action} className="space-y-5">

                {/* Email Input */}
                <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="name@company.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Password
                        </label>
                        <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                            Forgot password?
                        </a>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            name="password"
                          
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-10 pr-10 py-2.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Remember Me Toggle */}
                <div className="flex items-center">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
                    />
                    <label htmlFor="remember" className="ml-2.5 text-xs text-slate-400 select-none">
                        Remember me for 30 days
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={pending}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/25"
                >
                    {pending ? (
                        <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    ) : (
                        <>
                            <span>Sign in</span>
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-xs text-slate-400">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                    Sign up
                </a>
            </p>


        </>


    )
}

export default LoginFrom
