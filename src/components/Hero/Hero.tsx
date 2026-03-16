"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export function Hero() {
  return (
    <Section id="hero">
      <Content
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Kicker>Matheus Viana</Kicker>
        <h1>Analista de Sistemas e Desenvolvedor Front-end</h1>
        <p>
          Atuo com React e Next.js na construção de interfaces modernas, responsivas e orientadas
          a negocio, com foco em componentização, performance e evolução continua.
        </p>

        <Actions>
          <a href="#projects">Ver Projetos</a>
          <a href="/cv-deviana.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </Actions>
      </Content>
    </Section>
  );
}

const Section = styled.section`
  min-height: calc(100vh - 72px);
  background: ${({ theme }) => theme.gradients.hero};
  display: grid;
  place-items: center;
  padding: 6rem 1.25rem 4rem;
`;

const Content = styled(motion.div)`
  max-width: 860px;
  text-align: center;

  h1 {
    font-size: clamp(2.2rem, 5vw, 4.3rem);
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: clamp(1rem, 2vw, 1.2rem);
    max-width: 700px;
    margin: 0 auto;
  }
`;

const Kicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.85rem;

  a {
    padding: 0.82rem 1.2rem;
    border-radius: 0.8rem;
    border: 1px solid transparent;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  a:first-child {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  a:last-child {
    border-color: ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
  }

  a:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;
