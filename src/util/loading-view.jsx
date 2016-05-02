
'use strict';

import React from 'react';

export default ({ children }) => {
  return (
    <div style={{ display: children ? 'inline-block' : 'none' }}>
      Loading...
    </div>
  );
}
