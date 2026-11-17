import ProjectList from './components/ProjectList';
import projects from './projects';

function App() {
  return (
    <main className="app">
      <h1>Portfolio Gallery</h1>
      <p className="subtitle">Projects from Web Programming · Gachon University</p>
      <ProjectList projects={projects} />
    </main>
  );
}

export default App;
