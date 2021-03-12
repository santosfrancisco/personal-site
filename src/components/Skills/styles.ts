import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

export const SkillContainer = styled.div`
  background: #00000030;

  height: 6px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const SkillBar = styled.div<{ value: number }>`
  background: var(--secondary);

  height: 100%;
  width: ${p => p.value ?? 0}%;
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 32px;
`;
