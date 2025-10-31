import React, { useEffect, useRef } from 'react';
import { MathfieldElement } from 'mathlive';

interface MathInputProps {
  value: string;
  onChange: (latex: string) => void;
}

const MathInput = ({ value, onChange }: MathInputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mathfieldRef = useRef<MathfieldElement | null>(null);
  const onChangeRef = useRef(onChange);
  const initialValueRef = useRef(value);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const mathfield = new MathfieldElement({
      virtualKeyboardMode: 'onfocus',
      virtualKeyboards: 'numeric symbols',
      smartFence: true,
      smartMode: true,
    });

    mathfield.value = initialValueRef.current;
    mathfield.addEventListener('input', (event) => {
      const target = event.target as MathfieldElement;
      onChangeRef.current(target.value);
    });

    containerRef.current?.replaceChildren(mathfield);
    mathfieldRef.current = mathfield;

    return () => {
      mathfield.remove();
      mathfieldRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (mathfieldRef.current && value !== mathfieldRef.current.value) {
      mathfieldRef.current.value = value;
    }
  }, [value]);

  return (
    <div className="math-input-container">
      <div ref={containerRef} className="w-full" />
    </div>
  );
};

export default MathInput;
