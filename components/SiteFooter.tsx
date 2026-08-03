import {BasicContact, SocialContact} from './ContactLinks'
import {NavLinks} from './NavLinks'

export function SiteFooter({pathname}: {pathname: string}) {
  return (
    <footer id="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <BasicContact />
          <NavLinks pathname={pathname} />
        </div>
        <div className="footer-bottom">
          <span>© Olaolu Olawuyi {new Date().getFullYear()}</span>
          <SocialContact />
        </div>
      </div>
    </footer>
  )
}
