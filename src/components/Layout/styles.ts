import styled from 'styled-components';
import { config, Container as AwesomeContainer } from 'react-awesome-styled-grid';

export const Container = styled(AwesomeContainer)`
  min-height: calc(100vh - 85px - 104px);
  ${props => config(props).media.sm`
    min-height: calc(100vh - 85px - 85px);
  `}
`;
