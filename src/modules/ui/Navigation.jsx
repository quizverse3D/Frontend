import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Link to="/">Главное меню</Link>
      <Link to="/game">Игровое поле</Link>
      <Link to="/avatar">Редактор аватаров</Link>
      <Link to="/settings">Настройки</Link>
    </nav>
  );
}

export default Navigation; 