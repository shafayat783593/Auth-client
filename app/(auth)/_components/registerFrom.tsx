'use client';

import React, { useActionState, useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { registerAction, RegisterState } from '../_action/_authAction';

const initialState: RegisterState = {
  success: false,
  error: null,
};

export default function RegisterFrom() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [clientError, setClientError] = useState<string | null>(null);

  // Password Strength Check
  const isPasswordLongEnough = password.length >= 8;
  const hasSpecialCharOrNumber = /[0-9!@#$%^&*]/.test(password);

  // React 19 / Next.js 15 useActionState
  const [state, action, isPending] = useActionState(registerAction, initialState);
  // Form Submit-এর আগে Validation Handling
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setClientError(null);

    if (password !== confirmPassword) {
      e.preventDefault();
      setClientError('Passwords do not match.');
      return;
    }

    if (!isPasswordLongEnough) {
      e.preventDefault();
      setClientError('Password must be at least 8 characters long.');
      return;
    }
  };

  const displayError = clientError || state.error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-400 mb-4 ring-1 ring-indigo-500/20">
            <User className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Create an account</h1>
          <p className="text-sm text-slate-400 mt-1">Get started with your free account today</p>
        </div>

        {/* Error Notification (Client validation + Server Error) */}
        {displayError && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {displayError}
          </div>
        )}

        {/* Success Message */}
        {state.success && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            Account created successfully! Redirecting...
          </div>
        )}

        {/* Form */}
        <form action={action} onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

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
                name="email"
                required
                placeholder="name@company.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm Password Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Requirements Checklist */}
          {password && (
            <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 space-y-1.5 text-xs text-slate-400">
              <div className={`flex items-center gap-2 ${isPasswordLongEnough ? 'text-emerald-400' : ''}`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>At least 8 characters long</span>
              </div>
              <div className={`flex items-center gap-2 ${hasSpecialCharOrNumber ? 'text-emerald-400' : ''}`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Contains a number or symbol</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/25 mt-2"
          >
            {isPending ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <>
                <span>Create account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}