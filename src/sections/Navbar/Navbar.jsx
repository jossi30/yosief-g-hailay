import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import homeLightIcon from '../../assets/home-light.svg';
import homeDarkIcon from '../../assets/home-dark.svg';
import aboutLightIcon from '../../assets/person-light.svg';
import aboutDarkIcon from '../../assets/person-dark.svg';
import projectsLightIcon from '../../assets/project-light.svg';
import projectsDarkIcon from '../../assets/project-dark.svg';
import contactLightIcon from '../../assets/contact-light.svg';
import contactDarkIcon from '../../assets/contact-dark.svg';
import sunIcon from '../../assets/moon.svg';
import moonIcon from '../../assets/sun.svg';

import styles from './NavbarStyles.module.css';

function FloatingNav() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "#home", lightIcon: homeLightIcon, darkIcon: homeDarkIcon, label: "Home" },
    { href: "#about", lightIcon: aboutLightIcon, darkIcon: aboutDarkIcon, label: "About Me" },
    { href: "#projects", lightIcon: projectsLightIcon, darkIcon: projectsDarkIcon, label: "Projects" },
    { href: "#contact", lightIcon: contactLightIcon, darkIcon: contactDarkIcon, label: "Contact" },
  ];

  return (
    <div className={styles.floatingNav}>
      {navItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className={styles.navItem}
          whileHover={{ scale: 1.2 }}
          title={item.label}
        >
          <img src={theme === 'light' ? item.lightIcon : item.darkIcon} alt={item.label} className={styles.navIcon} />
        </motion.a>
      ))}
      <motion.button
        onClick={toggleTheme}
        className={styles.navItem}
        whileHover={{ scale: 1.2 }}
        title="Toggle Theme"
      >
        <img src={theme === 'light' ? moonIcon : sunIcon} alt="Toggle Theme" className={styles.navIcon} />
      </motion.button>
    </div>
  );
}

export default FloatingNav;
