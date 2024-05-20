import React, { useState, useEffect, useRef } from 'react';
import './popup.css';

const Popup = ({ children, onClose }) => {
  const popupRef = useRef();

  const handleClickOutside = event => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={popupRef} className="popup-overlay">
      <div className="popup-content">
        {children}
        <button className="popup-closeButton" onClick={onClose}>
          <span>&#10006;</span>
        </button>
      </div>
    </div>
  );
};

export default Popup;
