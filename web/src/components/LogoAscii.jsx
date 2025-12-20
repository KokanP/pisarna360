import React from 'react';

const LogoAscii = () => {
  return (
    <div className="d-flex align-items-center">
      <img 
        src={`${import.meta.env.BASE_URL}img/logo_lion.webp`} 
        alt="Pisarna360 Lev"
        style={{ 
          height: '60px', 
          width: 'auto',
          objectFit: 'contain'
        }}
      />
      
      {/* Napis 360 */}
      <div className="ms-2 text-primary" style={{ lineHeight: 1 }}>
        <span style={{ fontSize: '4.6rem', fontWeight: '900', letterSpacing: '-2px' }}>360</span>
      </div>
    </div>
  );
};

export default LogoAscii;
