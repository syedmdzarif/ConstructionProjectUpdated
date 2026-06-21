import React from 'react';

export default function Contact() {
  return (
    <div className="w-full h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-xl text-center border border-white/10 p-12 bg-slate-900/50 backdrop-blur rounded-lg">
        <span className="text-xs text-amber-500 tracking-widest uppercase block mb-2">// Network Core</span>
        <h1 className="text-3xl font-black tracking-wider uppercase mb-4">Contact Nexus</h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Establish an active transmission line to our logistical coordination arrays. 
        </p>
        <div className="text-xs text-slate-500 uppercase tracking-widest space-y-1 mb-6">
          <p>COMMUNICATIONS: support@nexus.build</p>
          <p>SECURE LINE: +1 (555) 019-2834</p>
        </div>
        <a href="/" className="text-xs bg-white text-slate-950 px-4 py-2 font-bold uppercase hover:bg-amber-500 hover:text-white transition-colors duration-200">
          ← Back to Hub
        </a>
      </div>
    </div>
  );
}