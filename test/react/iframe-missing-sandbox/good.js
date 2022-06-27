import React from 'react';

const Frame1 = <iframe sandbox="allow-popups" />;
const Frame2 = () => (
  <div>
    <iframe sandbox="allow-popups"></iframe>
    {React.createElement('iframe', { sandbox: 'allow-popups' })}
  </div>
);
