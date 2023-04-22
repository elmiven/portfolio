import styles from './Skill.module.css';
import stylesContainer from './../../common/Container.module.css'


function Skills(props: any) {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}><img src={props.pic}/> </div>
      <h3>{props.title}</h3>
      <span className={styles.description}>{props.description}</span>

    </div>
  );
}

export default Skills;
