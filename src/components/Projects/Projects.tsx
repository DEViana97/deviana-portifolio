"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";

import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Title>
          <h2>Projetos em Destaque</h2>
          <p>Selecao de produtos que mostram estrategia, qualidade tecnica e impacto visual.</p>
        </Title>

        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
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
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <Tags>
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </Tags>

                <Links>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Deploy
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
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
  padding: 5.5rem 1.25rem;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Title = styled.div`
  max-width: 680px;
  margin-bottom: 1.8rem;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    margin-bottom: 0.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

const Card = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
`;

const Body = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 0.55rem;
  }
`;

const Tags = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;

  span {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 999px;
    padding: 0.25rem 0.7rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;

  a {
    font-size: 0.9rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
