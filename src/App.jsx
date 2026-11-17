import { useState } from 'react';
import FilterBar from './components/FilterBar';
import ProjectList from './components/ProjectList';
import projects from './projects';

// Every technology used by at least one project, alphabetically
const technologies = [...new Set(projects.flatMap((p) => p.tech))].sort();

function App() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <main className="app">
      <h1>Portfolio Gallery</h1>
      <p className="subtitle">Projects from Web Programming · Gachon University</p>
      <FilterBar options={technologies} active={filter} onChange={setFilter} />
      <p className="result-count" aria-live="polite">
        {filter === 'All' ? `Showing all ${visible.length} projects` : `${visible.length} of ${projects.length} projects use ${filter}`}
      </p>
      <ProjectList projects={visible} />
    </main>
  );
}

export default App;
