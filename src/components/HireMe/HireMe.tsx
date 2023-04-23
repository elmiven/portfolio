import styles from './HireMe.module.css';
import stylesContainer from './../../common/Container.module.css'


function RemoteJob() {
  return (
    <div className={styles.hireMeBlock}>

      <div className={`${stylesContainer.container} ${styles.hireMeContainer} `}>


        <a href="#" id="Hire"> <h2>Hire Me</h2></a>


        <div className={styles.hireMe}>



          <div className={styles.text}>
            <span>Currently looking for remote job,
              see contacts below ⤵

            </span>
          </div>


        </div>
      </div>

    </div>

  );
}

export default RemoteJob;