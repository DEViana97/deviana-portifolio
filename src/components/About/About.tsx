"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

export function About() {
  return (
    <Section id="about">
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <PhotoWrap>
          <Image src="/projects/profile-placeholder.svg" alt="Foto profissional" fill sizes="300px" />
        </PhotoWrap>

        <Text>
          <h2>Sobre Mim</h2>
          <p>
            Sempre gostei de tecnologia e sabia que queria construir minha carreira com
            computadores. Quando conheci a programação, foi amor a primeira vista. Atualmente atuo
            no front-end e transformo requisitos de negocio em interfaces modernas e responsivas.
          </p>
          <p>
            Tenho experiencia com React.js, Next.js, JavaScript e TypeScript, utilizando boas
            praticas de componentização e trabalho em equipe com Scrum e Kanban. Meu objetivo e ser
            o melhor desenvolvedor que posso ser, sempre aberto a aprender novas stacks e desafios.
          </p>
        </Text>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 5.5rem 1.25rem;
`;

const Container = styled(motion.div)`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  gap: 1.4rem;

  @media (min-width: 900px) {
    grid-template-columns: 290px 1fr;
    align-items: center;
  }
`;

const PhotoWrap = styled.div`
  position: relative;
  border-radius: 1.4rem;
  overflow: hidden;
  min-height: 280px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const Text = styled.div`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  p + p {
    margin-top: 1rem;
  }
`;
