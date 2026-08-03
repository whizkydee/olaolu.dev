import type {ReactNode} from 'react'

import styles from './resume.module.css'

export default function ResumeLayout({children}: {children: ReactNode}) {
  return <div className={styles.route}>{children}</div>
}
