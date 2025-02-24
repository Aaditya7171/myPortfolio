import { Link } from "wouter";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>
        <div className="flex items-center gap-6">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary/80">About</button>
          <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary/80">Skills</button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary/80">Projects</button>
          <button onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary/80">Resume</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary/80">Contact</button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
