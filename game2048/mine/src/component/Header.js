import React from 'react';

export default function Header({ score, bestScore}) {
  return (
    <div className="heading">
      <div className="title">2048</div>
      <div className="scores-container">
        <div className="score-container">{score}</div>
        <div className="best-container">{bestScore}</div>
      </div>
    </div>
  );
}