import './index.scss'
import { SlickProject } from './slick.project';
const ProjectSection = () => {
    return (
        <section className="container-project marg-all">
            <div className="header-project">
                <h1>Project</h1>
            </div>
            <div className="project">
                <SlickProject />
            </div>
        </section>
    )
}

export default ProjectSection;