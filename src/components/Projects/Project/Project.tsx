import styles from './Project.module.css';
import stylesContainer from './../../common/Container.module.css'


function Project(props: any) {
  return (
    <div className={styles.project}>
      <div className={styles.img} style={{ background: `url(${props.pic})`, backgroundSize: `500px 500px` }}>
        <a href="#" className={styles.checkit}><div>CHECK IT</div></a>


        {/* <div className={styles.icon}><img src={props.pic} /> </div> */}

      </div>
      <div className={styles.description}>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>

    </div>
  );
}

export default Project;
