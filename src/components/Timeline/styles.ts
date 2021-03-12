import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 29px;
    top: 0;
    margin: 60px 0 0 -1px;
    width: 2px;
    height: calc(100% - 60px);
    background: var(--primary);
    z-index: -1;
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 60px;

  & + & {
    margin-top: 36px;
  }
`;

export const Time = styled.div`
  background-image: url(/blob.svg);
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 59px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9px;
  margin-right: 32px;
`;

export const Month = styled.span`
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  padding-bottom: 3px;
`;

export const Year = styled.span`
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
`;

export const JobDuration = styled.p`
  font-size: 12px;
  line-height: 14px;
`;

export const JobTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
`;

export const Role = styled.span`
  font-weight: 800;
  font-size: 23.1111px;
  line-height: 30px;
  color: var(--secondary);
`;

export const Company = styled.span`
  font-weight: 800;
  font-size: 23.1111px;
  line-height: 30px;
  color: var(--primary);
`;

export const JobDescription = styled.p`
  font-size: 12px;
  line-height: 14px;
`;
