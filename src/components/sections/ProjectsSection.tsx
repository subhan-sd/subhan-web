import { useState, useMemo } from 'react';
import { projects, projectCategories, type ProjectCategory } from '@/data/projects';
import { ExternalLink, Server, Brain, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'fullstack':
        return <Layers className="w-4 h-4 text-blue-500" />;
      case 'backend-infra':
        return <Server className="w-4 h-4 text-emerald-500" />;
      case 'ai-ml':
        return <Brain className="w-4 h-4 text-purple-500" />;
      case 'opensource':
        return <Terminal className="w-4 h-4 text-amber-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      case 'Active Development':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
      case 'Prototype / Research':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700';
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col gap-2.5 max-w-3xl mb-8">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Featured Engineering Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Architectural Projects & Implementations
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Real-world systems, asynchronous backends, and applied AI prototypes designed with scalability and reliability in mind.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap border ${
              activeTab === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-transparent shadow-sm'
                : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
            }`}
          >
            All Disciplines ({projects.length})
          </button>
          {projectCategories.map((cat) => {
            const count = projects.filter((p) => p.category === cat.id).length;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-transparent shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Category & Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">{project.category.replace('-', ' ')}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-medium ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem & Solution Architecture */}
                <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60 space-y-1">
                    <span className="font-mono text-[11px] font-semibold uppercase text-zinc-500 dark:text-zinc-400">Problem:</span>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 space-y-1">
                    <span className="font-mono text-[11px] font-semibold uppercase text-blue-700 dark:text-blue-400">Architecture:</span>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.architecture}</p>
                  </div>
                </div>

                {/* Metrics Highlight */}
                {project.metricsOrHighlight && (
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{project.metricsOrHighlight}</span>
                  </div>
                )}
              </div>

              {/* Bottom Row: Stack & Actions */}
              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
                      aria-label="View code on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
