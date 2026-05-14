"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";

import { glassCard } from "@/styles/globalStyles";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Header>
          <HeaderLeft>
            <Eyebrow>Portfolio</Eyebrow>
            <h2>Projetos em Destaque</h2>
          </HeaderLeft>
          <Subtitle>
            Uma seleção de trabalhos que demonstram domínio técnico e foco na experiência do usuário.
          </Subtitle>
        </Header>

        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <ImageWrap>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </ImageWrap>

              <Body>
                <Tags>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Tag key={tech}>#{tech}</Tag>
                  ))}
                </Tags>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <Links>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Ver Projeto <FaExternalLinkAlt size={12} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub <FaGithub size={14} />
                  </a>
                </Links>
              </Body>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.surfaceContainerLow}80;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const HeaderLeft = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.onSurface};
  }
`;

const Eyebrow = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  max-width: 24rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(motion.article)`
  ${glassCard}
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.08);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.7s ease, transform 0.7s ease;
  }
`;

const Body = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: 0.5rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    line-height: 1.6;
    flex: 1;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};

  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:nth-child(3) {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
`;

const Links = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  gap: 1.5rem;

  a {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.8rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.75;
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.onSurfaceVariant};

      &:hover {
        color: ${({ theme }) => theme.colors.onSurface};
      }
    }
  }
`;
