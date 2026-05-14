"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { glassCard } from "@/styles/globalStyles";
import { experienceItems } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Title>Jornada Profissional</Title>

        <Timeline>
          <CenterLine />

          {experienceItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <TimelineRow key={item.title} $isLeft={isLeft}>
                <CardWrap
                  $isLeft={isLeft}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Card $isLeft={isLeft}>
                    <Period>{item.period}</Period>
                    <h3>{item.title}</h3>
                    <Organization>{item.organization}</Organization>
                    <p>{item.description}</p>
                  </Card>
                </CardWrap>

                <Dot />

                <EmptySlot />
              </TimelineRow>
            );
          })}
        </Timeline>
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
  margin-bottom: 4rem;
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CenterLine = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.outlineVariant}4d;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TimelineRow = styled.div<{ $isLeft: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: ${({ $isLeft }) => ($isLeft ? "row" : "row-reverse")};
    justify-content: space-between;
    align-items: center;
  }
`;

const CardWrap = styled(motion.div)<{ $isLeft: boolean }>`
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Card = styled.div<{ $isLeft: boolean }>`
  ${glassCard}
  padding: 1.5rem;
  border-radius: 1rem;

  @media (min-width: 768px) {
    text-align: ${({ $isLeft }) => ($isLeft ? "right" : "left")};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: 0.25rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    line-height: 1.6;
    margin-top: 0.75rem;
  }
`;

const Period = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Organization = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary} !important;
  margin-top: 0 !important;
`;

const Dot = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}33;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    flex-shrink: 0;
  }
`;

const EmptySlot = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 45%;
  }
`;
