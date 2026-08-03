import {NavLinks} from '../NavLinks'
import {BasicContact, SocialContact} from '../ContactLinks'

import styles from './SiteFooter.module.css'

export function SiteFooter({pathname}: {pathname: string}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <BasicContact className={styles.basicContact} />
          <NavLinks className={styles.navigation} pathname={pathname} />
        </div>
        <div className={styles.bottom}>
          <span>© Olaolu Olawuyi {new Date().getFullYear()}</span>
          <SocialContact className={styles.footerSocial} />
        </div>
      </div>
    </footer>
  )
}
