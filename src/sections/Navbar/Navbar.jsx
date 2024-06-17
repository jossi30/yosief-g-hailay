
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import homeLightIcon from '../../assets/home-light.svg';
import homeDarkIcon from '../../assets/home-dark.svg';
import aboutLightIcon from '../../assets/aboutme-light.svg';
import aboutDarkIcon from '../../assets/aboutme-dark.svg';
import projectsLightIcon from '../../assets/projects-light.svg';
import projectsDarkIcon from '../../assets/projects-dark.svg';
import contactLightIcon from '../../assets/contact-light.svg';
import contactDarkIcon from '../../assets/contact-dark.svg';

import styles from './NavbarStyles.module.css';

function FloatingNav() {
  const { theme } = useTheme();

  const navItems = [
    { href: "#home", lightIcon: homeLightIcon, darkIcon: homeDarkIcon, label: "Home" },
    { href: "#about", lightIcon: aboutLightIcon, darkIcon: aboutDarkIcon, label: "About Us" },
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
    </div>
  );
}

export default FloatingNav;
