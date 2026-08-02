import { SOCIAL_PROFILES } from '@/lib/site'

export function BasicContact() {
  return (
    <div className="basic-contact">
      <span className="say-hello">Say Hello</span>
      <ul>
        <li><a href="mailto:hello@olaolu.dev">hello@olaolu.dev</a></li>
        <li><a href="https://t.me/mrolaolu" target="_blank" rel="noreferrer noopener" aria-label="t dot me forward slash mrolaolu">t.me/mrolaolu</a></li>
      </ul>
    </div>
  )
}

export function SocialContact() {
  return (
    <ul className="social-contact">
      <li><a href={SOCIAL_PROFILES.twitter} target="_blank" rel="noreferrer noopener" aria-label="Olaolu on Twitter">TW</a></li>
      <li><a href={SOCIAL_PROFILES.github} target="_blank" rel="noreferrer noopener" aria-label="Olaolu on GitHub">GH</a></li>
      <li><a href={SOCIAL_PROFILES.linkedIn} target="_blank" rel="noreferrer noopener" aria-label="Olaolu on LinkedIn">LN</a></li>
      <li><a href={SOCIAL_PROFILES.youtube} target="_blank" rel="noreferrer noopener" aria-label="Olaolu's YouTube channel">YT</a></li>
    </ul>
  )
}
