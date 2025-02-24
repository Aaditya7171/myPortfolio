import { Github, Linkedin, Instagram, Code2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/adityatomar91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/Aaditya7171"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://leetcode.com/u/Aditya1919/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Code2 className="w-6 h-6" />
                            <span className="sr-only">LeetCode</span>
                        </a>
                        <a
                            href="https://www.instagram.com/innocent_aditya91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Instagram className="w-6 h-6" />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Aditya Tomar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 