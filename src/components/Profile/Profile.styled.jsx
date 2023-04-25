import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[0]}px;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  width: 300px;
  border-radius: ${props => props.theme.radiuses.medium};
  box-shadow: ${props => props.theme.shadows.main};
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radiuses.small};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[0]}px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: ${props => props.theme.radiuses.round};
  box-shadow: ${props => props.theme.shadows.main};
  margin-top: ${props => props.theme.space[4]}px;
  }
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.text};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  margin: ${props => props.theme.space[2]}px;
`;

export const Name = styled(Info)`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Tag = styled(Info)`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
`;

export const Location = styled(Info)`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const StatsList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space[4]}px;
  width: 100%;
  border-top: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.lightGray};
  margin: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[4]}px;
  width: 100%;
  :not(:last-child) {
    border-right: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.lightGray};
  }
`;

export const StatsInfo = styled.span`
  margin: ${props => props.theme.space[0]}px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Label = styled(StatsInfo)`
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
`;

export const Quantity = styled(StatsInfo)`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
