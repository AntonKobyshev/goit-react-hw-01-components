import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  width: 600px;
  border-radius: ${props => props.theme.radiuses.medium};
  box-shadow: ${props => props.theme.shadows.main};
`;

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radiuses.medium};
  background-color: ${props => props.theme.colors.tableHat};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  text-align: center;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.lightGray : 'transparent'};
`;

export const Th = styled.th``;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td``;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
