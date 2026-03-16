"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { experienceItems } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <h2>Experiencia e Formacao</h2>

        <Timeline>
          {experienceItems.map((item, index) => (
            <Card
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Badge />
              <div>
                <h3>{item.title}</h3>
                <strong>{item.organization}</strong>
                <span>{item.period}</span>
                <p>{item.description}</p>
              </div>
            </Card>
          ))}
        </Timeline>
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

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    margin-bottom: 1.4rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 0.9rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.54rem;
    top: 0;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const Card = styled(motion.article)`
  position: relative;
  margin-left: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.gradients.card};
  box-shadow: ${({ theme }) => theme.shadows.card};

  h3 {
    font-size: 1.1rem;
  }

  strong,
  span {
    display: block;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Badge = styled.div`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  left: -1.98rem;
  top: 1.1rem;
`;
