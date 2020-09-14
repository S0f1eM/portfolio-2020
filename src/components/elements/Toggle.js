import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="smcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="smcheck"
    />
    <label htmlFor="smcheck" value="check" aria-hidden="true"/>
  </span>
);

export default Toggle;
