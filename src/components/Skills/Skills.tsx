"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Title>
          <h2>Tecnologias e Skills</h2>
          <p>Stack moderna para construir interfaces rapidas, acessiveis e escalaveis.</p>
        </Title>

        {skillGroups.map((group, groupIndex) => (
          <Group key={group.category}>
            <h3>{group.category}</h3>
            <Grid>
              {group.items.map((item, index) => (
                <Card
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: groupIndex * 0.08 + index * 0.04, duration: 0.35 }}
                  whileHover={{ y: -6 }}
                >
                  <item.icon size={28} aria-hidden />
                  <span>{item.name}</span>
                </Card>
              ))}
            </Grid>
          </Group>
        ))}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 5.5rem 1.25rem;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Title = styled.div`
  max-width: 680px;
  margin-bottom: 2rem;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    margin-bottom: 0.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Group = styled.div`
  & + & {
    margin-top: 1.9rem;
  }

  h3 {
    margin-bottom: 0.9rem;
    font-size: 1.15rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
`;

const Card = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.gradients.card};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.card};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-weight: 600;
  }
`;
