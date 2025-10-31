import MathDisplay from './MathDisplay';

type MathPaletteProps = {
  onInsert: (symbol: string) => void;
};

const mathSymbols = [
  ['\\frac{}{}', '\\sqrt{}', '^', '_', '\\int'],
  ['\\sin', '\\cos', '\\tan', '\\log', '\\ln'],
  ['\\pm', '\\times', '\\div', '=', '\\neq'],
];

export default function MathPalette({ onInsert }: MathPaletteProps) {
  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {mathSymbols.flat().map((symbol, index) => (
        <button
          key={`${symbol}-${index}`}
          onClick={() => onInsert(symbol)}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
          type="button"
        >
          <MathDisplay math={symbol} />
        </button>
      ))}
    </div>
  );
}
