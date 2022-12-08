import { useState } from 'react';

import Dropdown from './components/dropdown/Dropdown';

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown options={OPTIONS} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default App;

const OPTIONS = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];
