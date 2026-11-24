import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import ProjectFilter from '../projects/ProjectFilter';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetailModal from '../projects/ProjectDetailModal';
import { projectCategories, projectsData } from '../../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute count for each category
  const projectCounts = useMemo(() => {
    const counts = { 'All Projects': projectsData.length };
    projectCategories.forEach((cat) => {
      if (cat !== 'All Projects') {
        counts[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Things I've Built"
          subtitle="Koleksi proyek perangkat lunak kandidat yang pernah saya kembangkan — mencakup arsitektur web frontend, backend REST API terstruktur, fullstack decoupled, dan antarmuka mobile."
        />

        {/* Category Filters with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.1}>
          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            projectCounts={projectCounts}
          />
        </ScrollReveal>

        {/* Projects Cards Grid with AnimatePresence & Staggered Scroll */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
