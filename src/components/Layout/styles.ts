import styled from 'styled-components';
import { config, Container as AwesomeContainer } from 'react-awesome-styled-grid';

export const Container = styled(AwesomeContainer)`
  min-height: calc(100vh - 109px - 121px - 48px); // 100vh - navbar - footer - padding
  padding-top: 24px;
  padding-bottom: 24px;
  ${props => config(props).media.md`
    min-height: calc(100vh - 109px - 121px - 96px); // 100vh - navbar - footer - padding
    padding-top: 48px;
    padding-bottom: 48px;
  `}
`;
