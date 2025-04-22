import React from 'react';
import './Container.css';

export default function Container({ children, className, style, onClick }) {
  return (
    <div className={`container ${className ?? ''}`.trim()} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
