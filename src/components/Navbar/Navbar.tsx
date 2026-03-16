"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { IoClose, IoMenu } from "react-icons/io5";
import styled from "styled-components";

import { useThemeModeContext } from "@/components/Providers";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleMode } = useThemeModeContext();

  return (
    <Wrapper>
      <Inner>
        <Brand href="#hero">Deviana</Brand>

        <DesktopNav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </DesktopNav>

        <Actions>
          <ThemeButton onClick={toggleMode} aria-label="Alternar tema">
            {mode === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
          </ThemeButton>

          <HamburgerButton onClick={() => setIsOpen(true)} aria-label="Abrir menu">
            <IoMenu />
          </HamburgerButton>
        </Actions>
      </Inner>

      <AnimatePresence>
        {isOpen ? (
          <AsideBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <MobileMenu
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <MobileHeader>
                <h3>Menu</h3>
                <CloseButton onClick={() => setIsOpen(false)} aria-label="Fechar menu">
                  <IoClose />
                </CloseButton>
              </MobileHeader>

              <MobileNav>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </MobileNav>
            </MobileMenu>
          </AsideBackdrop>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 60;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: color-mix(in oklab, ${({ theme }) => theme.colors.background} 85%, transparent);
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Brand = styled.a`
  font-family: var(--font-space-grotesk), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: 600;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 960px) {
    display: flex;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ThemeButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.heading};
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const HamburgerButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.heading};
  display: grid;
  place-items: center;
  font-size: 1.15rem;
  cursor: pointer;

  @media (min-width: 960px) {
    display: none;
  }
`;

const AsideBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 70;
  display: flex;
  justify-content: flex-end;
`;

const MobileMenu = styled(motion.aside)`
  width: min(80vw, 320px);
  height: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.heading};
  cursor: pointer;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    padding: 0.75rem;
    border-radius: 0.75rem;
    background: ${({ theme }) => theme.gradients.card};
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-weight: 600;
  }
`;
