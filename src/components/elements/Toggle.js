import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="toggle-theme"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="toggle-theme"
    />
    <label htmlFor="toggle-theme" value="check" aria-hidden="true"/>
  </span>
);

export default Toggle;
