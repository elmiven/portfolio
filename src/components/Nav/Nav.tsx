import styles from './Nav.module.css';
import stylesContainer from './../../common/Container.module.css'


function Nav() {
  return (
    <div className={`${stylesContainer.container} ${styles.container} `}>

      <div className={styles.nav}>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Hire">Hire(Remote)</a>
        <a href="#Contacts">Contacts</a>
        {/* <a href="#Footer">Footer</a> */}
      </div>
    </div>

  );
}

export default Nav;
