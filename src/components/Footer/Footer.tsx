"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Brand>Matheus Viana</Brand>

        <Copyright>
          © {new Date().getFullYear()} Matheus Viana. Built with precision.
        </Copyright>

        <Links>
          <a href="https://github.com/DEViana97" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/matheus-deviana" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </Links>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.surfaceContainerLowest};
  border-top: 1px solid ${({ theme }) => theme.colors.outlineVariant}1a;
  padding: 3rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Brand = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
