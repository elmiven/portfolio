import styles from './Nav.module.css';
import stylesContainer from './../../common/Container.module.css'


function Nav() {
  return (
    <div className={`${stylesContainer.container} ${styles.container} `}>

      <div className={styles.nav}>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Hire">Hire me</a>
        <a href="#Contacts">Contact</a>
        <a href="#Footer">Social media</a>
      </div>
    </div>

  );
}

export default Nav;
