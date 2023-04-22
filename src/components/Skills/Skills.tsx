import styles from './Skills.module.css';
import stylesContainer from './../../common/Container.module.css'
import Skill from './Skill/Skill';


let skills = {
  JS: {
    title: "JS/TS",
    description: "I'm very best in JS and practicing TS...",
    picurl: "https://cdn.iconscout.com/icon/free/png-512/free-typescript-3629120-3030260.png?f=avif&w=256"
  },
  CSS: {
    title: "HTML/CSS",
    description: "I know how to make responsive markups and also flex and grid markups stiles...",
    picurl: "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-512.png"
  },
  React: {
    title: "React",
    description: "I'm the guru of the React and in it's FLUX dataflow",
    picurl: "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=avif&w=256"
  }


}


function Skills() {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer} `}>
      <a href="#" id="Skills"> <h2 className={styles.title}>Skills</h2></a>
        <div className={styles.skills}>
          <Skill title={skills.JS.title} description={skills.JS.description} pic={skills.JS.picurl}/>
          <Skill title={skills.CSS.title} description={skills.CSS.description} pic={skills.CSS.picurl}/>
          <Skill title={skills.React.title} description={skills.React.description} pic={skills.React.picurl}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
