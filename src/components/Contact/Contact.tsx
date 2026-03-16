"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.email("Informe um email valido."),
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
        <Info>
          <h2>Contato</h2>
          <p>Vamos conversar sobre seu proximo projeto ou oportunidade frontend.</p>

          <ul>
            <li>
              <MdEmail /> deviana@email.com
            </li>
            <li>
              <FaGithub /> github.com/seu-usuario
            </li>
            <li>
              <FaLinkedin /> linkedin.com/in/seu-usuario
            </li>
          </ul>
        </Info>

        <Form as={motion.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input id="name" placeholder="Seu nome" {...register("name")} />
          {errors.name ? <ErrorText>{errors.name.message}</ErrorText> : null}

          <label htmlFor="email">Email</label>
          <input id="email" placeholder="seu@email.com" {...register("email")} />
          {errors.email ? <ErrorText>{errors.email.message}</ErrorText> : null}

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" rows={5} placeholder="Como posso ajudar?" {...register("message")} />
          {errors.message ? <ErrorText>{errors.message.message}</ErrorText> : null}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>

          {responseState === "success" ? (
            <StateText $state="success">Mensagem enviada com sucesso.</StateText>
          ) : null}
          {responseState === "error" ? (
            <StateText $state="error">Nao foi possivel enviar agora. Tente novamente.</StateText>
          ) : null}
        </Form>
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
  display: grid;
  gap: 1.1rem;

  @media (min-width: 960px) {
    grid-template-columns: 0.9fr 1.1fr;
    align-items: flex-start;
  }
`;

const Info = styled.div`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
  }

  p {
    margin-top: 0.6rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ul {
    list-style: none;
    margin-top: 1rem;
    display: grid;
    gap: 0.6rem;
  }

  li {
    display: inline-flex;
    gap: 0.6rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.gradients.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.1rem;
  display: grid;
  gap: 0.45rem;

  label {
    margin-top: 0.55rem;
    font-size: 0.86rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.65rem;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    padding: 0.75rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focus};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  button {
    margin-top: 0.75rem;
    border: 0;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: 700;
    border-radius: 0.7rem;
    padding: 0.78rem;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.8;
    cursor: wait;
  }
`;

const ErrorText = styled.small`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: 600;
`;

const StateText = styled.small<{ $state: "success" | "error" }>`
  color: ${({ theme, $state }) =>
    $state === "success" ? theme.colors.success : theme.colors.danger};
  font-weight: 700;
`;
