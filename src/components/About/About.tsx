"use client";

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
        <Left>
          <h2>Sobre Mim</h2>
          <Divider />
        </Left>

        <Right>
          <p>
            Com foco sólido em engenharia de software frontend, minha jornada é pautada pela
            criação de aplicações que não apenas funcionam, mas encantam. Especialista no
            ecossistema React, utilizo TypeScript para garantir robustez e Next.js para
            otimização de SEO e performance.
          </p>
          <p>
            Acredito que o código deve ser tão limpo quanto a UI que ele renderiza. Minha
            abordagem une a precisão matemática do desenvolvimento com a sensibilidade do UX
            Design, resultando em produtos que resolvem problemas reais de negócio.
          </p>
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.surfaceContainerLow};
`;

const Container = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 5fr 7fr;
    align-items: start;
  }
`;

const Left = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: 1.5rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`;

const Right = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }

  p + p {
    margin-top: 1.25rem;
  }
`;
