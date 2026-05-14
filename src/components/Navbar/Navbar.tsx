"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import styled from "styled-components";

import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <Wrapper>
      <Inner>
        <Brand href="#hero">Matheus Viana</Brand>

        <DesktopNav>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              $isActive={activeSection === item.href.replace("#", "")}
            >
              {item.label}
            </NavLink>
          ))}
        </DesktopNav>

        <Actions>
          <ResumeLink href="/cv-deviana.pdf" target="_blank" rel="noreferrer">
            Currículo
          </ResumeLink>
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
                <Brand href="#hero" onClick={() => setIsOpen(false)}>Matheus Viana</Brand>
                <CloseButton onClick={() => setIsOpen(false)} aria-label="Fechar menu">
                  <IoClose />
                </CloseButton>
              </MobileHeader>

              <MobileNav>
                {navItems.map((item) => (
                  <MobileNavLink
                    key={item.href}
                    href={item.href}
                    $isActive={activeSection === item.href.replace("#", "")}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
                <MobileResumeLink href="/cv-deviana.pdf" target="_blank" rel="noreferrer">
                  Currículo
                </MobileResumeLink>
              </MobileNav>
            </MobileMenu>
          </AsideBackdrop>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 60;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(70, 69, 84, 0.1);
  background: ${({ theme }) => theme.colors.surface}99;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Brand = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 960px) {
    display: flex;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ResumeLink = styled.a`
  display: none;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 960px) {
    display: block;
  }
`;

const HamburgerButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.outlineVariant};
  background: transparent;
  color: ${({ theme }) => theme.colors.onSurface};
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  cursor: pointer;

  @media (min-width: 960px) {
    display: none;
  }
`;

const AsideBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 70;
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(4px);
`;

const MobileMenu = styled(motion.aside)`
  width: min(80vw, 320px);
  height: 100%;
  background: ${({ theme }) => theme.colors.surfaceContainerLow};
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.outlineVariant}30;
`;

const CloseButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.outlineVariant};
  background: transparent;
  color: ${({ theme }) => theme.colors.onSurface};
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  cursor: pointer;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 0.25rem;
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.onSurfaceVariant};
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileNavLink = styled.a<{ $isActive?: boolean }>`
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary + "15" : "transparent"};
  border-left: 3px solid
    ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.onSurfaceVariant};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  transition: all 0.2s;
  display: block;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}15;
    border-left-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileResumeLink = styled.a`
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  text-align: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
