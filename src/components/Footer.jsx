import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-foreground">
          Paul-Maximilian Hoffmann
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      <a
        href="#hero"
        aria-label="Scroll to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};