"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { glassCard } from "@/styles/globalStyles";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Title>Stack Tecnológica</Title>

        <Grid>
          {skillGroups.map((group, groupIndex) => (
            <GroupCard
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.4 }}
            >
              <GroupHeader>
                <CategoryIcon $accent={group.accent}>{group.icon}</CategoryIcon>
                <h3>{group.category}</h3>
              </GroupHeader>

              <Chips>
                {group.items.map((item, index) => (
                  <Chip key={item} $highlight={index === 0} $accent={group.accent}>
                    {item}
                  </Chip>
                ))}
              </Chips>
            </GroupCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.8rem, 3vw, 2rem);
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GroupCard = styled(motion.div)`
  ${glassCard}
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.onSurface};
  }
`;

const accentColor = {
  primary: (theme: { colors: { primary: string } }) => theme.colors.primary,
  secondary: (theme: { colors: { secondary: string } }) => theme.colors.secondary,
  tertiary: (theme: { colors: { tertiary: string } }) => theme.colors.tertiary,
};

const CategoryIcon = styled.span<{ $accent: "primary" | "secondary" | "tertiary" }>`
  font-family: "Material Symbols Outlined", sans-serif;
  font-size: 1.75rem;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  color: ${({ $accent, theme }) => accentColor[$accent](theme as never)};
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Chip = styled.span<{ $highlight: boolean; $accent: "primary" | "secondary" | "tertiary" }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;

  ${({ $highlight, $accent, theme }) =>
    $highlight
      ? css`
          background: ${accentColor[$accent](theme as never)}33;
          color: ${accentColor[$accent](theme as never)};
          border: 1px solid ${accentColor[$accent](theme as never)}33;
        `
      : css`
          background: ${theme.colors.surfaceContainerHighest};
          color: ${theme.colors.onSurface};
        `}
`;
