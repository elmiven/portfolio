import styles from './Main.module.css';
import stylesContainer from './../../common/Container.module.css'


function Main() {
  return (
    <div className={styles.mainBlock}>

      <div className={`${stylesContainer.container} ${styles.mainContainer} `}>
      <a href="#" id="About"><h2>About me</h2></a>

      {/* <div className={styles.title}> */}
        
        {/* </div> */}
      


        
        <div className={styles.main}>

        <div className={styles.photo}>

</div>

          <div className={styles.text}>
            <span> Hey!</span>
            <h3>I'm Evgeny</h3>
            <p>front-end developer with big experience... </p>
          </div>

         


        </div>
      </div>

    </div>

  );
}

export default Main;