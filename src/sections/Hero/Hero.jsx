
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heros.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV - Mohamed EL-mesery27.6.2024.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
    const {theme , toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
    return (
    <section id="hero" className={styles.container}>
       <div className={styles.colorModeContainer}>

            <img className={styles.hero} src={heroImg} alt="Mohamed profile picture"/>
            <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
       </div>
       <div className={styles.info}>
            <h1>Mohamed <br/>Elmesery</h1>
            <h2>Java Developer</h2>
            <span>
                <a href="https://github.com/mohamedElmesery999" target="_blank">
                    <img src={githubIcon} alt="Github icon"/>
                </a>
                <a href="https://Linkedin.com" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon"/>
                </a>
            </span>
            <p className={styles.description}>I enjoy diving into challenging projects that push the boundaries of technology.
                 My focus is on delivering scalable solutions <br/>that meet user needs and enhance overall system performance.</p>

                 <a href={CV}>
                    <button className="hover" download> Resume</button>

                 </a>

       </div>

    </section>
  );
}

export default Hero;