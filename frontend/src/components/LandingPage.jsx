import React, { useEffect } from 'react';

// === NAVBAR COMPONENT ===
const Navbar = () => {
  return (
    <div style={{ padding: '32px 12px 0 12px', backgroundColor: 'transparent' }}>
      <nav 
        className="max-w-7xl mx-auto sticky top-6 z-50"
        style={{ 
          position: 'relative', 
          backgroundColor: 'transparent', 
          borderBottom: 'none', 
          padding: '0 24px'
        }}
      >
        <div className="h-16 flex items-center justify-between gap-4">
          
          {/* Left: Brand Name */}
          <div className="flex-shrink-0">
            <span 
              className="text-xs font-normal tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ 
                color: '#f5f7f5', 
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif' 
              }}
            >
              Arch Mechanic Studio
            </span>
          </div>

          {/* Middle: Navigation Links - Perfectly Centered */}
          <div 
            style={{ 
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            <a href="#construction" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', marginRight: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Construction</a>
            <a href="#interior" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', marginRight: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Interior</a>
            <a href="#products" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Products</a>
          </div>

          {/* Right: Get Started Text Link */}
          <div className="flex-shrink-0">
            <a href="#get-started" className="text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 whitespace-nowrap" style={{ color: '#f5f7f5', textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Get Started</a>
          </div>

        </div>
      </nav>
    </div>
  );
};

// === HERO SECTION COMPONENT ===
const HeroSection = () => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: 'calc(100vh - 80px)', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#3d4a41' 
      }}
    >
      
      {/* Left Panel: Simple & Sophisticated Ultra-Light Typography */}
      <div 
        style={{ 
          position: 'absolute',
          inset: '0 52% 0 0', 
          display: 'flex',
          alignItems: 'center',
          padding: '0 5% 0 8%',
          zIndex: 10
        }}
      >
        <div>
          {/* Clean, tight-spaced, ultra-simple architectural text structure */}
          <h1 
            style={{ 
              color: '#f5f7f5', 
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', 
              fontWeight: '200',        // Delicate line thickness
              lineHeight: '0.85',       // Tight vertical line spacing
              letterSpacing: '-0.02em', // Compressed horizontal letter spacing
              margin: '0 0 24px 0', 
              fontFamily: '"Plus Jakarta Sans", sans-serif', 
              textTransform: 'uppercase'
            }}
          >
            Design<br />
            Consult<br />
            Build<br />
            <span style={{ color: 'rgba(245, 247, 245, 0.3)' }}>Products</span> 
          </h1>

          <p 
            style={{ 
              color: '#b3beb7', 
              fontSize: '0.85rem', 
              lineHeight: '1.7', 
              maxWidth: '360px',
              margin: '0',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.05em', 
              fontFamily: '"Plus Jakarta Sans", sans-serif' 
            }}
          >
            Engineering the mechanical core of high-end architectural systems.
          </p>
        </div>
      </div>

      {/* Right Panel: 3D Model Canvas */}
      <div 
        style={{ 
          position: 'absolute',
          inset: '0px 0px 0px 48%', 
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <model-viewer 
          src="/assets/1.glb" 
          alt="Interactive 3D Architectural Model"
          camera-controls
          auto-rotate
          auto-rotate-delay="1500"
          interaction-prompt="none"
          interpolation-decay="200"
          camera-orbit="45deg 75deg auto"
          disable-zoom
          disable-tap
          min-field-of-view="auto"
          shadow-intensity="1.2"
          style={{ 
            width: '100%', 
            height: '100%',
            outline: 'none',              
            boxShadow: 'none',            
            WebkitTapHighlightColor: 'transparent', 
            backgroundColor: 'transparent'
          }}
        ></model-viewer>
      </div>

    </section>
  );
};

// === MAIN LANDING PAGE COMPONENT ===
const LandingPage = () => {
  useEffect(() => {
    // Inject Plus Jakarta Sans Font Family
    const fontId = 'studio-minimal-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500&display=swap';
      document.head.appendChild(link);
    }

    // Inject 3D Model Viewer Engine Script
    const scriptId = 'model-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="w-full min-h-screen antialiased"
      style={{ backgroundColor: '#3d4a41' }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;