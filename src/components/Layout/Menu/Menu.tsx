import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const menuItems = [
  {
    label: '<Home />',
    url: '/',
  },
  {
    label: '<Portifólio />',
    url: '/portifolio',
  },
  // {
  //   label: '<Blog />',
  //   url: '/blog',
  // },
];

const Menu = () => {
  const router = useRouter();
  return (
    <S.Container>
      <ul>
        <S.MenuTextItem>{`<Menu>`}</S.MenuTextItem>
        {menuItems.map(option => (
          <S.MenuItem key={option.label} active={router.pathname === option.url}>
            <Link href={option.url}>
              <a>{option.label}</a>
            </Link>
          </S.MenuItem>
        ))}
        <S.MenuTextItem>{`</Menu>`}</S.MenuTextItem>
      </ul>
    </S.Container>
  );
};

export default Menu;
