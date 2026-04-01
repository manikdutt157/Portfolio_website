import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default function Home() {
    return (
        <main className="max-w-4xl mx-auto w-full space-y-20">
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
                <Footer />
        </main>
    );
}

