const MathPalette = ({ onInsert }: { onInsert: (symbol: string) => void }) => {
  const symbols = [
    ['\\frac{}{}', '√', '^', '_', 'π'],
    ['\\sin', '\\cos', '\\tan', '\\log', '\\ln'],
    ['\\pm', '\\times', '\\div', '=', '\\neq']
  ];

  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {symbols.flat().map((symbol, i) => (
        <button
          key={i}
          onClick={() => onInsert(symbol)}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          <MathDisplay math={symbol} />
        </button>
      ))}
    </div>
  );
};