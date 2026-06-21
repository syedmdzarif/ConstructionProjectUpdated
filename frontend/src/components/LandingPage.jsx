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
            <a href="#interior" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', marginRight: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Interior</a>
            <a href="#construction" className="transition-colors duration-300 text-[11px] tracking-widest uppercase" style={{ color: '#f5f7f5', textDecoration: 'none', marginRight: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Construction</a>
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

// === PORTFOLIO CHAPTER ROW COMPONENT ===
const PortfolioRow = ({ id, heading, subheading, paragraph, imgUrl, reverse }) => {
  return (
    <section 
      id={id}
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 8%',
        backgroundColor: '#3d4a41',
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{ 
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: reverse ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
          gap: '8%',
          alignItems: 'center'
        }}
      >
        {/* Content Box */}
        <div style={{ order: reverse ? 2 : 1 }}>
          <span 
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#b3beb7',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            {subheading}
          </span>
          <h2 
            style={{ 
              color: '#f5f7f5', 
              fontSize: 'clamp(2rem, 4vw, 3.8rem)', 
              fontWeight: '200',        
              lineHeight: '0.85',       
              letterSpacing: '-0.02em', 
              margin: '0 0 28px 0', 
              fontFamily: '"Plus Jakarta Sans", sans-serif', 
              textTransform: 'uppercase'
            }}
          >
            {heading}
          </h2>
          <p 
            style={{ 
              color: '#b3beb7', 
              fontSize: '0.9rem', 
              lineHeight: '1.8', 
              maxWidth: '420px',
              margin: '0',
              fontWeight: '300',
              fontFamily: '"Plus Jakarta Sans", sans-serif' 
            }}
          >
            {paragraph}
          </p>
        </div>

        {/* Image Display Frame with Blueprint Filter */}
        <div style={{ order: reverse ? 1 : 2, width: '100%' }}>
          <div 
            style={{ 
              width: '100%',
              aspectRatio: '4/5',
              overflow: 'hidden',
              backgroundColor: '#2b352e', 
              position: 'relative'
            }}
          >
            <img 
              src={imgUrl} 
              alt={heading} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(1) contrast(1.18) brightness(0.82)',
                mixBlendMode: 'luminosity', 
                opacity: 0.88
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(61, 74, 65, 0.22)',
                mixBlendMode: 'color',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// === MAIN LANDING PAGE COMPONENT ===
const LandingPage = () => {
  useEffect(() => {
    const fontId = 'studio-minimal-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500&display=swap';
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
  }, []);

  return (
    <div 
      className="w-full min-h-screen antialiased"
      style={{ backgroundColor: '#3d4a41', overflowX: 'hidden' }}
    >
      <Navbar />
      <HeroSection />
      
      {/* Chapter 1: Interior -> Using local asset paths */}
      <PortfolioRow 
        id="interior"
        subheading="Chapter 01"
        heading="Interior"
        paragraph="Crafting internal spaces where physical form aligns completely with environmental flow. Every ceiling plane, embedded element, and hidden interface serves an intentional purpose."
        imgUrl="assets/1.jpg"
        reverse={false}
      />

      {/* Chapter 2: Construction -> Using local asset paths */}
      <PortfolioRow 
        id="construction"
        subheading="Chapter 02"
        heading="Construction"
        paragraph="Executing physical frameworks with mechanical precision. We translate raw structural calculations into clean architectural truths, balancing structural density with open voids."
        imgUrl="assets/2.jpg"
        reverse={true}
      />

      {/* Chapter 3: Products -> Using local asset paths */}
      <PortfolioRow 
        id="products"
        subheading="Chapter 03"
        heading="Products"
        paragraph="Developing bespoke interior components, hardware accessories, and micro-architectural elements. Each item is stripped down to its functional requirements and built to last."
        imgUrl="assets/3.jpg"
        reverse={false}
      />
    </div>
  );
};

export default LandingPage;