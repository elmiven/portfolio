import styles from './Projects.module.css';
import stylesContainer from './../../common/Container.module.css'
import Project from './Project/Project';


let projects = {
  FakeBook: {
    title: "FakeBook",
    description: "Simplified clone of social nework ",
    picurl: "https://i.ytimg.com/vi/I3--hg-Pu8w/maxresdefault.jpg"
  },
  AdvancedTDL: {
    title: "AdvancedToDoList",
    description: "I know how to make responsive markups and also flex and grid markups stiles...",
    picurl: "https://images.squarespace-cdn.com/content/v1/5f64c2a45a59eb66a7264992/1626437886765-SD1B5ZXR3VIP4SXGEOHW/overwhelmed_by_app.jpg"
  },
  PetProject1: {
    title: "Pet-project 1",
    description: "I'm the guru of the React and in it's FLUX dataflow",
    picurl: "https://www.freecodecamp.org/news/content/images/2023/03/thumbnail_EN--2-.png"
  }


}


function Projects() {
  return (
    <div className={styles.ProjectsBlock}>
      <div className={`${stylesContainer.container} ${styles.ProjectsContainer} `}>
      <a href="#" id="Projects"><h2 className={styles.title}>Projects</h2></a>
        <div className={styles.Projects}>
          <Project title={projects.FakeBook.title} description={projects.FakeBook.description} pic={projects.FakeBook.picurl}/>
          <Project title={projects.AdvancedTDL.title} description={projects.AdvancedTDL.description} pic={projects.AdvancedTDL.picurl}/>
          <Project title={projects.PetProject1.title} description={projects.PetProject1.description} pic={projects.PetProject1.picurl}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
