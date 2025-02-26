import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

interface MathDisplayProps {
  math: string;
}

function parseMixedMath(input: string) {
  const segments: Array<{ type: 'text' | 'math'; content: string; block: boolean }> = [];
  const regex = /(##)(.*?)\1|(#)(.*?)\3|([^#]+)/g;

  let match;
  while ((match = regex.exec(input)) !== null) {
    if (match[2]) { // Block math ##...##
      segments.push({ type: 'math', content: match[2], block: true });
    } else if (match[4]) { // Inline math #...#
      segments.push({ type: 'math', content: match[4], block: false });
    } else if (match[5]) { // Plain text
      segments.push({ type: 'text', content: match[5], block: false });
    }
  }

  return segments;
}

export default function MathDisplay({ math }: MathDisplayProps) {
  const segments = parseMixedMath(math);

  return (
    <span>
      {segments.map((segment, index) => {
        if (segment.type === 'text') {
          return <span key={index}>{segment.content}</span>;
        }

        try {
          return segment.block ? (
            <BlockMath key={index} math={segment.content} />
          ) : (
            <InlineMath key={index} math={segment.content} />
          );
        } catch (error) {
          console.error('Error rendering LaTeX:', error);
          return (
            <span key={index} className="text-red-500">
              [Error: {segment.content}]
            </span>
          );
        }
      })}
    </span>
  );
}