'use client';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import classes from './styles.module.css';

export const HeaderItem = (nav: { id: string; name: string; href: string }) => {
  const pathname = usePathname();

  const navigationItem = classNames(classes.navigationItem, {
    [classes.active]: pathname === nav.href,
  });

  return (
    <li key={nav.id} className={navigationItem}>
      <Link href={nav.href}>{nav.name}</Link>
    </li>
  );
};
