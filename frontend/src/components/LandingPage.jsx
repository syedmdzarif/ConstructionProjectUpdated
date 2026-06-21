import React, { useEffect, useState, useRef } from 'react';

// === NAVBAR COMPONENT ===
const Navbar = () => {
  return (
    <div style={{ padding: '32px 12px 0 12px', backgroundColor: 'transparent', position: 'relative', zIndex: 100 }}>
      <nav 
        className="max-w-7xl mx-auto"
        style={{ backgroundColor: 'transparent', padding: '0 24px' }}
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

          {/* Middle: Navigation Links */}
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
            <a href="#interior" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', marginRight: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Interior</a>
            <a href="#construction" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', marginRight: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Construction</a>
            <a href="#products" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Products</a>
          </div>

          {/* Right: Get Started Link */}
          <div className="flex-shrink-0">
            <a href="#get-started" className="text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 whitespace-nowrap" style={{ color: '#f5f7f5', textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Get Started</a>
          </div>

        </div>
      </nav>
    </div>
  );
};

// === MAIN LANDING PAGE COMPONENT ===
const LandingPage = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isModelHovered, setIsModelHovered] = useState(false);
  
  const pointerStartCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fontId = 'studio-minimal-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    const scriptId = 'model-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
      document.head.appendChild(script);
    }

    const styleId = 'studio-absolute-lockout';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        html, body {
          overflow: hidden !important;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        .studio-card {
          border: 1px solid transparent;
          border-radius: 6px;
        }
        /* POP SCALE ONLY - BORDER OUTLINES AND BACKDROP TINTS REMOVED */
        .studio-card:hover {
          transform: translateY(0) scale(1.05) !important;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  const handlePointerDown = (e) => {
    pointerStartCoords.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    const deltaX = Math.abs(e.clientX - pointerStartCoords.current.x);
    const deltaY = Math.abs(e.clientY - pointerStartCoords.current.y);

    if (deltaX > 6 || deltaY > 6) return;

    setIsZoomed(!isZoomed);
  };

  // Fixed choreography: Incoming blocks delay slightly so outgoing blocks can vanish cleanly first
  const generateLinkBlockStyle = (isActive) => ({
    position: 'absolute',
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    padding: '24px',
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
    pointerEvents: isActive ? 'auto' : 'none',
    cursor: 'pointer',
    zIndex: 20,
    transition: isActive 
      ? 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s' 
      : 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0s'
  });

  const getModelTransformValue = () => {
    let baseScale = isZoomed ? 1.25 : 1.0;
    if (isModelHovered) {
      baseScale += 0.05;
    }
    return `translate(-50%, -50%) scale(${baseScale})`;
  };

  return (
    <div 
      className="w-full h-screen antialiased"
      style={{ 
        backgroundColor: '#3d4a41',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Navbar />

      {/* STAGE 1: DEFAULT HERO VIEW VIEWPORT LAYOUT */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 5% 0 8%',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: isZoomed ? 0 : 1,
          transform: isZoomed ? 'translateY(-30px)' : 'translateY(0)',
          transition: isZoomed 
            ? 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0s' 
            : 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
        }}
      >
        <div>
          <h1 
            style={{ 
              color: '#f5f7f5', 
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', 
              fontWeight: '200',        
              lineHeight: '0.85',       
              letterSpacing: '-0.02em', 
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

      {/* STAGE 2: INTERACTIVE NAV-LINK BLOCKS */}
      {/* Link 1: Interior Focus */}
      <a 
        href="#interior-explore" 
        className="studio-card"
        style={{
          ...generateLinkBlockStyle(isZoomed),
          left: '5vw',
          top: '41vh'
        }}
      >
        <span style={{ color: '#f5f7f5', fontSize: '28px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
          Interior
        </span>
        <span style={{ color: '#b3beb7', fontSize: '13px', fontWeight: '300', lineHeight: '1.6', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Spatial system design and structural exposures. We curate spatial layouts that intentionally integrate custom mechanical components right into the architecture.
        </span>
      </a>

      {/* Link 2: Construction Focus */}
      <a 
        href="#construction-explore" 
        className="studio-card"
        style={{
          ...generateLinkBlockStyle(isZoomed),
          right: '5vw',
          top: '16vh'
        }}
      >
        <span style={{ color: '#f5f7f5', fontSize: '28px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
          Construction
        </span>
        <span style={{ color: '#b3beb7', fontSize: '13px', fontWeight: '300', lineHeight: '1.6', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Structural framework engineering and fabrication execution. Our onsite technical direction bridges complex calculations with pristine structural physical realities.
        </span>
      </a>

      {/* Link 3: Products Focus */}
      <a 
        href="#products-explore" 
        className="studio-card"
        style={{
          ...generateLinkBlockStyle(isZoomed),
          right: '5vw',
          top: '62vh'
        }}
      >
        <span style={{ color: '#f5f7f5', fontSize: '28px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
          Products
        </span>
        <span style={{ color: '#b3beb7', fontSize: '13px', fontWeight: '300', lineHeight: '1.6', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Custom high-spec hardware components manufactured directly to order. Tailored mechanisms engineered to satisfy rigorous performance thresholds.
        </span>
      </a>

      {/* FIXED VIEWPORT INTERACTIVE 3D MODEL CANVAS MODULE */}
      <div 
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
        onMouseEnter={() => setIsModelHovered(true)}
        onMouseLeave={() => setIsModelHovered(false)}
        style={{ 
          position: 'absolute', 
          top: '50%',
          left: isZoomed ? '50%' : '74%', 
          transform: getModelTransformValue(),
          width: '50vw', 
          height: '80vh',
          zIndex: 5,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: isModelHovered ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' : 'drop-shadow(0 0px 0px rgba(0,0,0,0))',
          transition: 'left 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease'
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
    </div>
  );
};

export default LandingPage;