import React from 'react';

export default function Signin() {
  return (
    <div className="w-full h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 font-mono">
      <div className="w-full max-w-md border border-white/10 p-8 sm:p-10 bg-slate-900/40 backdrop-blur-md rounded-xl shadow-2xl">
        
        {/* Header Spec */}
        <div className="mb-8 text-center">
          <span className="text-[10px] text-amber-500 tracking-[0.3em] uppercase block mb-2">// ACCESS TERMINAL</span>
          <h1 className="text-2xl font-black tracking-wider uppercase text-white">SIGN IN</h1>
          <p className="text-slate-500 text-xs mt-1">Authenticate node connection.</p>
        </div>

        {/* Form Structure */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-[11px] tracking-widest text-slate-400 uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="operator@nexus.build"
              className="w-full bg-slate-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-[11px] tracking-widest text-slate-400 uppercase mb-2">Access Password</label>
            <input 
              type="password" 
              placeholder="••••••••••••"
              className="w-full bg-slate-950 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors duration-200"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-white text-slate-950 font-bold uppercase text-xs tracking-widest py-3 rounded mt-2 hover:bg-amber-500 hover:text-white transition-all duration-200 shadow-lg"
          >
            Verify Credentials
          </button>
        </form>

        {/* Toggle View Link */}
        <div className="mt-6 text-center text-xs text-slate-400">
          New terminal operator?{' '}
          <a href="/signup" className="text-amber-500 font-bold hover:underline">
            Create Account
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <a href="/" className="text-[11px] text-slate-500 uppercase tracking-widest hover:text-amber-400 transition-colors duration-200">
            ← Abort and Return to Hub
          </a>
        </div>

      </div>
    </div>
  );
}