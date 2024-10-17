import * as React from 'react';
import { useState } from 'react';

interface Props {
  initialCount: number;
}

export default function Counter(props: Props) {
  const [count, setCount] = useState(props.initialCount);

  return (
    <div>
      {count} : <button onClick={() => setCount(count + 1)}>올리기</button>
    </div>
  );
}
