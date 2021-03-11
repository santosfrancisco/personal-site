import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: calc(12px + 61px);

  width: 220px;
  background: var(--white);
  border-radius: 4px;
  padding: 16px;
  filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.1));
`;

export const MenuTextItem = styled.li`
  font-weight: 800;
  font-size: 24px;
  line-height: 48px;
  color: var(--primary);
`;

export const MenuItem = styled(MenuTextItem)<{ active: boolean }>`
  padding-left: 24px;

  a {
    color: ${({ active }) => (active ? 'var(--secondary)' : 'var(--primary)')};
    text-decoration: none;
    &:hover {
      color: var(--secondary);
    }
  }
`;
