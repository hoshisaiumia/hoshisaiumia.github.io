import { useEffect, useState } from "react";
import fetchProjects from "../lib/fetchProjects";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { FaCodeFork, FaRegStar } from "react-icons/fa6";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export default function Projects() {
  const [projects, setProjects] = useState<Repo[]>();

  const url = "https://api.github.com/users/hoshisaiumia/repos";

  useEffect(() => {
    fetchProjects<Repo[]>(url).then(setProjects);
  }, []);

  return (
    <section
      id="projects"
      className="w-full flex gap-2 flex-wrap justify-center"
    >
      {projects &&
        projects.map((p) => (
          <a href={p.html_url} key={p.id} target="_blank">
            <Card className="w-56 h-50 bg-zinc-950 border border-zinc-800 md:w-70 hover:bg-zinc-900">
              <CardContent className="flex flex-col gap-2">
                <CardTitle className="text-white font-bold md:text-xl wrap-break-word flex gap-1 flex-col">
                  <div className="flex gap-2 items-center">
                    {p.name}
                    {p.fork && (
                      <FaCodeFork size={18} className="text-zinc-500" />
                    )}
                  </div>

                  <div className="flex gap-2 items-center text-sm">
                    <FaRegStar /> {p.stargazers_count}
                  </div>
                </CardTitle>
                {p.description && (
                  <CardDescription className="text-zinc-400">
                    {p.description}
                  </CardDescription>
                )}
              </CardContent>
            </Card>
          </a>
        ))}
    </section>
  );
}
