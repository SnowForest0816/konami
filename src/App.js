import React, { useState } from 'react';

import useKonamiCode from './konami-code';
import Secret from './Secret';

export default function App () {
  const [styles, setStyles] = useState({ display: 'none' })
  const sequence = useKonamiCode(() => setStyles({ ...styles, display: 'block' }));

  return (
    <div style={{ margin: '60px 0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>{JSON.stringify(sequence)}</div>
      <div style={styles}>
        <Secret />
      </div>
    </div>
  )
}