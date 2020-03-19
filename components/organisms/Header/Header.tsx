import styled from 'styled-components';
import { AppLink } from '../../atoms/AppLink';

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAppLink = styled(AppLink)`
  padding: 4px;
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledAppLink href="/">
        Home
      </StyledAppLink>
      |
      <StyledAppLink href="/other-page">
        Other page (not exist)
      </StyledAppLink>
    </StyledHeader>
  );
}
