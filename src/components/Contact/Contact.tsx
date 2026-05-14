"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { z } from "zod";

import { glassCard } from "@/styles/globalStyles";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.email("Informe um email válido."),
  message: z.string().min(10, "Sua mensagem precisa ter ao menos 10 caracteres."),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [responseState, setResponseState] = useState<null | "success" | "error">(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/contact", data);
      setResponseState("success");
      reset();
    } catch {
      setResponseState("error");
    }
  };

  return (
    <Section id="contact">
      <Container>
        <Info
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Vamos trabalhar juntos?</h2>
          <p>
            Estou sempre aberto a discutir novos projetos, parcerias criativas ou
            oportunidades em times de alto nível.
          </p>

          <ContactItems>
            <ContactItem>
              <IconBubble $color="primary">
                <span>mail</span>
              </IconBubble>
              <div>
                <Label>Email</Label>
                <Value>mateusviana97@gmail.com</Value>
              </div>
            </ContactItem>

            <ContactItem>
              <IconBubble $color="secondary">
                <span>location_on</span>
              </IconBubble>
              <div>
                <Label>Localização</Label>
                <Value>Brasil (Remoto)</Value>
              </div>
            </ContactItem>
          </ContactItems>

          <SocialLinks>
            <SocialBtn
              href="https://github.com/DEViana97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </SocialBtn>
            <SocialBtn
              href="https://www.linkedin.com/in/matheus-deviana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </SocialBtn>
          </SocialLinks>
        </Info>

        <FormCard
          as={motion.form}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Field>
            <label htmlFor="name">Nome Completo</label>
            <input id="name" placeholder="Seu nome..." {...register("name")} />
            {errors.name ? <ErrorText>{errors.name.message}</ErrorText> : null}
          </Field>

          <Field>
            <label htmlFor="email">Seu Email</label>
            <input id="email" placeholder="email@exemplo.com" {...register("email")} />
            {errors.email ? <ErrorText>{errors.email.message}</ErrorText> : null}
          </Field>

          <Field>
            <label htmlFor="message">Sua Mensagem</label>
            <textarea id="message" rows={4} placeholder="Fale sobre seu projeto..." {...register("message")} />
            {errors.message ? <ErrorText>{errors.message.message}</ErrorText> : null}
          </Field>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </SubmitButton>

          {responseState === "success" ? (
            <StateText $state="success">Mensagem enviada com sucesso.</StateText>
          ) : null}
          {responseState === "error" ? (
            <StateText $state="error">Não foi possível enviar agora. Tente novamente.</StateText>
          ) : null}
        </FormCard>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.surfaceContainerLow};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const Info = styled(motion.div)`
  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: 1rem;
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    margin-bottom: 2.5rem;
  }
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const IconBubble = styled.div<{ $color: "primary" | "secondary" }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ $color, theme }) => theme.colors[$color]}1a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  span {
    font-family: "Material Symbols Outlined", sans-serif;
    font-size: 1.25rem;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    color: ${({ $color, theme }) => theme.colors[$color]};
  }
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const Value = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const SocialBtn = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.outlineVariant}4d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
    border-color: transparent;
  }
`;

const FormCard = styled.form`
  ${glassCard}
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.onSurface};
  }

  input,
  textarea {
    width: 100%;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.outlineVariant}4d;
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.onSurface};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    padding: 0.75rem 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.outline};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

const ErrorText = styled.small`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.error};
`;

const StateText = styled.small<{ $state: "success" | "error" }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ $state, theme }) =>
    $state === "success" ? theme.colors.secondary : theme.colors.error};
`;
