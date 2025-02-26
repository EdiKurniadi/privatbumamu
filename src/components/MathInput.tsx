import React, { useEffect, useRef } from 'react';
import { MathfieldElement } from 'mathlive';

interface MathInputProps {
  value: string;
  onChange: (latex: string) => void;
}

const MathInput = ({ value, onChange }: MathInputProps) => {
  const mfRef = useRef<MathfieldElement>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inisialisasi mathfield
    const mf = new MathfieldElement({
      virtualKeyboardMode: 'onfocus',
      virtualKeyboards: 'numeric symbols',
      smartFence: true,
      smartMode: true,
    });

    mf.value = value;
    mf.addEventListener('input', (ev) => {
      onChange((ev.target as MathfieldElement).value);
    });

    containerRef.current?.replaceChildren(mf);
    mfRef.current = mf;

    return () => {
      mf.remove();
    };
  }, []);

  // Update value ketika prop berubah
  useEffect(() => {
    if (mfRef.current && value !== mfRef.current.value) {
      mfRef.current.value = value;
    }
  }, [value]);

  return (
    <div className="math-input-container">
      <div ref={containerRef} className="w-full" />
    </div>
  );
};

export default MathInput;