import LoginFrom from '../_components/loginFrom'

function page() {
  return (


    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-400 mb-4 ring-1 ring-indigo-500/20">
            {/* <Lock className="w-6 h-6" /> */}
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome back</h1>
          <p className="text-sm text-slate-400 mt-1">Please enter your credentials to log in</p>
        </div>

        <LoginFrom />
      </div>
    </div>

  )
}

export default page