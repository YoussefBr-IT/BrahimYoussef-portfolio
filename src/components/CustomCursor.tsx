import React, { useEffect, useState } from 'react';

interface Bat {
  id: number;
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  scale: number;
  drift: number;
  velocity: number;
  flapPhase: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);



  

  return (
    <>
      {/* Custom cursor */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'rgba(75, 0, 130, 0.5)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
          zIndex: 9999,
          boxShadow: '0 0 15px rgba(138, 43, 226, 0.7)',
        }}
      />
      
      
    </>
  );
};

export default CustomCursor;