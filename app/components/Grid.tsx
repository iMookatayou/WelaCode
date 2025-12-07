import React from 'react';

// --- CSS Styles สำหรับ Ocean Animation ---
const styles = `
  /* พื้นหลังของ "ตัวกล่อง" (Ocean Blocks) - คืนค่าสีน้ำทะเลแบบไล่เฉด */
  .ocean-bg {
    background: linear-gradient(180deg, #6e86a5 0%, #355C9C 100%);
  }

  /* Wave Layer ทั่วไป */
  .wave-layer {
    position: absolute;
    left: -60%;
    width: 220%;
    height: 40%;
    background-repeat: repeat-x;
    background-size: 200px 40px;
    opacity: 0.9;
    border-radius: 50%;
    bottom: 0%; 
  }

  /* ปรับระดับคลื่นสำหรับกล่องทรงสูง (Tall Box) */
  .tall-box .wave-1 { bottom: -25%; }
  .tall-box .wave-2 { bottom: -20%; }
  .tall-box .wave-3 { bottom: -15%; }
  .tall-box .wave-4 { bottom: -10%; }

  /* --- Animation --- */
  .wave-1 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='40' viewBox='0 0 200 40'%3E%3Cpath d='M0 25 Q 25 15 50 25 T 100 25 T 150 25 T 200 25 V40 H0 Z' fill='%2326374f'/%3E%3C/svg%3E");
    opacity: 0.7;
    animation: waveScroll1 12s linear infinite;
  }
  @keyframes waveScroll1 { 0% { background-position-x: 0; } 100% { background-position-x: -200px; } }

  .wave-2 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='40' viewBox='0 0 200 40'%3E%3Cpath d='M0 25 Q 25 15 50 25 T 100 25 T 150 25 T 200 25 V40 H0 Z' fill='%2335486a'/%3E%3C/svg%3E");
    opacity: 0.8;
    animation: waveScroll2 9s linear infinite;
    bottom: 5%;
  }
  @keyframes waveScroll2 { 0% { background-position-x: 0; } 100% { background-position-x: 200px; } }

  .wave-3 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='40' viewBox='0 0 200 40'%3E%3Cpath d='M0 25 Q 25 15 50 25 T 100 25 T 150 25 T 200 25 V40 H0 Z' fill='%234f6f98'/%3E%3C/svg%3E");
    opacity: 0.9;
    animation: waveScroll3 7s linear infinite;
    bottom: 10%;
  }
  @keyframes waveScroll3 { 0% { background-position-x: -50px; } 100% { background-position-x: -250px; } }

  .wave-4 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='40' viewBox='0 0 200 40'%3E%3Cpath d='M0 25 Q 25 15 50 25 T 100 25 T 150 25 T 200 25 V40 H0 Z' fill='%235f81a8'/%3E%3C/svg%3E");
    opacity: 0.95;
    animation: waveScroll4 5s linear infinite;
    bottom: 15%;
  }
  @keyframes waveScroll4 { 0% { background-position-x: 100px; } 100% { background-position-x: -100px; } }
`;

const Gridbix = () => {
  const size = 100; // px
  const borderRadius = size * 0.5; // 50px (Standard Curve)
  const softRadius = 25; // 25px (Soft Corner)

  const colors = {
    red: '#1F2836',        // ซ้ายบน
    coral: '#587EA3',      // ขวาบน
    purple: '#5F7285',     // กลางซ้าย
    green: '#46576A',      // ล่างซ้าย
    yellow: '#1F2836',     // ล่างกลาง
    extraBottom: '#3F4A5F' // กล่องขวาล่าง
  };

  return (
    // เปลี่ยนจาก bg-transparent เป็น bg-white เพื่อบังคับให้พื้นหลังเป็นสีขาวสนิท ทับสีฟ้าเดิม
    <div className="flex items-center justify-center min-h-screen p-8 bg-white">
      <style>{styles}</style>
      
      <div style={{ display: 'inline-block' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, ${size}px)`,
            gridTemplateRows: `repeat(3, ${size}px)`,
            gap: 0,
          }}
        >
          {/* --- Column 1 --- */}
          <div style={{ gridColumn: '1', gridRow: '1', width: size, height: size, backgroundColor: colors.red, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }} />
          <div style={{ gridColumn: '1', gridRow: '2', width: size, height: size, backgroundColor: colors.purple, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }} />
          <div style={{ gridColumn: '1', gridRow: '3', width: size, height: size, backgroundColor: colors.green, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius }} />

          {/* --- Column 2 --- */}
          <div style={{ gridColumn: '2', gridRow: '1', width: size, height: size, backgroundColor: colors.coral, borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }} />
          
          {/* Ocean Circle (กลาง) - ใช้สีน้ำคืนมาแล้ว */}
          <div 
            className="ocean-bg"
            style={{ 
              gridColumn: '2', 
              gridRow: '2', 
              width: size, 
              height: size, 
              position: 'relative', 
              overflow: 'hidden', 
              borderRadius: '50%'
            }}
          >
            <div className="wave-layer wave-1"></div>
            <div className="wave-layer wave-2"></div>
            <div className="wave-layer wave-3"></div>
            <div className="wave-layer wave-4"></div>
          </div>

          <div style={{ gridColumn: '2', gridRow: '3', width: size, height: size, backgroundColor: colors.yellow, borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius, borderBottomLeftRadius: borderRadius }} />

          {/* --- Column 3 --- */}
          
          {/* 1. แท่งยาวด้านบน */}
          <div
            className="ocean-bg tall-box"
            style={{
              gridColumn: '3',
              gridRow: '1 / span 2',
              width: size,
              height: size * 1.96,
              alignSelf: 'start',
              
              borderTopLeftRadius: size,
              borderTopRightRadius: size, 
              borderBottomLeftRadius: softRadius,
              borderBottomRightRadius: softRadius,
              
              position: 'relative',
              overflow: 'hidden',
              zIndex: 2,
            }}
          >
            <div className="wave-layer wave-1"></div>
            <div className="wave-layer wave-2"></div>
            <div className="wave-layer wave-3"></div>
            <div className="wave-layer wave-4"></div>
          </div>

          {/* 2. บล็อคเดียวด้านล่าง */}
          <div
            style={{
              gridColumn: '3',
              gridRow: '3',
              width: size,
              height: size,
              backgroundColor: colors.extraBottom,
              alignSelf: 'end',
              
              borderTopLeftRadius: softRadius,
              borderTopRightRadius: softRadius,
              borderBottomLeftRadius: size,
              borderBottomRightRadius: size,
            }}
          />

        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <Gridbix />;
}