import styles from "./ProjectsStyles.module.css";
import Login from "../../assets/login-icon2.png"
import DailyNote from "../../assets/daily-note.jpg"
import AddProjects from "../../assets/react-iconn.png"
import AxiosProject from "../../assets/react-icon.jpg"
import AddList from "../../assets/viberr.png";
import weatherApp from "../../assets/fresh-burger.png";
import restaurant from "../../assets/hipsster.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={Login}
          link="https://github.com/mohamedElmesery999/Login.git"
          h3="Login-page"
          p="Streaming App"
        />
        <ProjectCard
          src={DailyNote}
          link="https://github.com/mohamedElmesery999/Daily-Notes.git"
          h3="Daily-Note"
          p="Streaming App"
        />
        <ProjectCard
          src={AddProjects}
          link="https://github.com/mohamedElmesery999/Add-projects.git"
          h3="Add-projects"
          p="Streaming App"
        />
        <ProjectCard
          src={AxiosProject}
          link="https://github.com/mohamedElmesery999/The-Main.git"
          h3="Axios-project"
          p="Streaming App"
        />
        <ProjectCard
          src={AddList}
          link="https://github.com/mohamedElmesery999/AddList"
          h3="AddList"
          p="Streaming App"
        />
        <ProjectCard
          src={weatherApp}
          link="https://github.com/mohamedElmesery999/Weather-App"
          h3="weatherApp"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={restaurant}
          link="https://github.com/mohamedElmesery999"
          h3="restaurant"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
