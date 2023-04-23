import styles from './Footer.module.css';
import stylesContainer from './../../common/Container.module.css'


function Footer() {
  return (
    <div className={styles.footerBlock}>

      <div className={`${stylesContainer.container} ${styles.footerContainer} `}>


        <a href="#" id="Footer"><h2>in social networks</h2></a>

        
        <div className={styles.footer}>

          <a href="#" >FB </a>
          <a href="#" >VK </a>
          <a href="#" >IG </a>


        </div>
      </div>

    </div>

  );
}

export default Footer;