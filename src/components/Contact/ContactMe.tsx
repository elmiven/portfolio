import stylesContainer from './../../common/Container.module.css'
import styles from './ContactMe.module.css';



function ContactMe() {
  return (
    <div className={styles.contactMeBlock}>
      <div className={`${stylesContainer.container} ${styles.contactMeContainer} `}>
        <a href="Contacts" id="Contacts"><h2>Contact me</h2></a>


        <div className={styles.contactMe}>

          <form className={styles.form}>
            <p>Name:</p>
            <div><input></input></div>
            <p>Email:</p>
            <div><input type={'email'}></input></div>
            <p>Text:</p>
            <div><textarea></textarea></div>

            <button> Send </button>
          </form>

        </div>

      </div>

    </div>

  );
}

export default ContactMe;