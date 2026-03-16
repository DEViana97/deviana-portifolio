"use client";

import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <span>
          <FaRegCopyright /> {new Date().getFullYear()} Matheus Viana
        </span>

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
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.4rem 1.25rem;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: 600;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;
