import PageLayout from "@/components/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { usuario } from "@/data/mockData";

const Usuario = () => {
  return (
    <PageLayout>
      <section className="py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Perfil do Usuário
          </h2>
          <Card className="w-full max-w-[680px]">
            <CardContent className="flex flex-col p-6 sm:p-10">
              {/* Top Section */}
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <Avatar className="h-24 w-24 border-2 border-slate-100">
                  <AvatarImage src={usuario.avatar} alt={usuario.nome} />
                  <AvatarFallback className="text-2xl">
                    {usuario.nome.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h1 className="text-3xl font-semibold tracking-tighter text-foreground sm:text-[32px]">
                    {usuario.nome}
                  </h1>
                  <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-[13px] font-medium text-blue-600">
                    {usuario.role}
                  </span>
                </div>
              </div>

              {/* Headline */}
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                {usuario.bio}
              </p>

              {/* Meta Info */}
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">
                <span>{usuario.location}</span>
                <span>{usuario.availability}</span>
              </div>

              {/* Skills Stack */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {usuario.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-lg bg-slate-100 px-3 py-1.5 text-[13px] text-slate-900 transition-all duration-200 hover:bg-slate-200">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Original Stats (Preserved at bottom) */}
              {/* Social Links */}
              <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="flex-1 gap-2 bg-[#24292e] hover:bg-[#24292e]/90">
                  <a
                    href={usuario.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  className="flex-1 gap-2 bg-[#0077b5] hover:bg-[#0077b5]/90">
                  <a
                    href={usuario.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Usuario;
