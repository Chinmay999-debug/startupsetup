import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  href,
  to,
  className = "",
  strength = 8,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  const sharedProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `btn-premium will-change-transform ${className}`,
  };

  // Internal route: use TanStack Link for client navigation
  const internalHref = href && href.startsWith("/") ? href : undefined;
  const linkTarget = to ?? internalHref;

  if (linkTarget) {
    return (
      <Link
        to={linkTarget as never}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        {...sharedProps}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick} {...sharedProps}>
      {children}
    </button>
  );
}
