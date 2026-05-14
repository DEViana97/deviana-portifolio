"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

import { glassCard } from "@/styles/globalStyles";

export function Hero() {
  return (
    <Section id="hero">
      <Inner>
        <Left
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>Disponível para novos desafios</Badge>

          <h1>
            Transformando Visão em{" "}
            <Highlight>Código</Highlight>{" "}
            de Alta Performance.
          </h1>

          <Subtitle>Frontend Developer | React &amp; Next.js Specialist</Subtitle>

          <Bio>
            Desenvolvo interfaces sofisticadas, resilientes e escaláveis. Foco total
            em entregar experiências digitais onde a estética encontra a performance
            técnica impecável.
          </Bio>

          <Actions>
            <PrimaryBtn href="#projects">
              Ver Projetos
            </PrimaryBtn>
            <GhostBtn href="/cv-deviana.pdf" target="_blank" rel="noreferrer">
              Download CV
            </GhostBtn>
          </Actions>
        </Left>

        <Right
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <Glow />
          <PhotoCard>
            <PhotoWrap>
              <Image
                src="/projects/deviana.jpg"
                alt="Matheus Viana"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                priority
              />
            </PhotoWrap>
          </PhotoCard>
        </Right>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 7rem 1.5rem 5rem;
  overflow: hidden;
  position: relative;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Left = styled(motion.div)`
  position: relative;
  z-index: 1;

  h1 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: 1rem;
  }
`;

const Badge = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.25rem;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  margin-bottom: 1.25rem;
`;

const Bio = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  max-width: 540px;
  margin-bottom: 2.5rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PrimaryBtn = styled.a`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 0 40px -10px ${({ theme }) => theme.colors.primary}4d;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

const GhostBtn = styled.a`
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary}66;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  border-radius: 0.75rem;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}1a;
  }
`;

const Right = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Glow = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background: ${({ theme }) => theme.colors.primary}1a;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
`;

const PhotoCard = styled.div`
  ${glassCard}
  padding: 1rem;
  border-radius: 1.5rem;
  transform: rotate(3deg);
  transition: transform 0.5s ease;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;

  &:hover {
    transform: rotate(0deg);
  }
`;

const PhotoWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.7s ease;
  }

  &:hover img {
    filter: grayscale(0%);
  }
`;
