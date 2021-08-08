import React from 'react';

export default function Header() {
  return (
    <div className="heading">
      <div className="title">2048</div>
      <div className="scores-container">
        <div className="score-container">362</div>
        <div className="best-container">438</div>
      </div>
    </div>
  );
}