import styled from 'styled-components';
import React from 'react';
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMain = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({
  children,
}: DefaultTemplateProps) {
  return (
    <Container>
      <Header />
      <StyledMain>
        {children}
      </StyledMain>
      <Footer />
    </Container>
  );
}
