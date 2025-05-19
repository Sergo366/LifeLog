import classes from './styles.module.css';
import { Logo } from './Logo';
import Link from 'next/link';
import { navigationList } from '@/entities/Header/const';

export const Header = () => {
  return (
    <header className={classes.wrapper}>
      <nav className={classes.navigation}>
        <Logo />
        <ul className={classes.navList}>
          {navigationList.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
