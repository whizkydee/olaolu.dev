import styles from './Newsletter.module.css'

export function Newsletter() {
  return (
    <aside className={styles.newsletter}>
      <form
        method="post"
        rel="noopener"
        target="_blank"
        action="https://gmail.us20.list-manage.com/subscribe/post?u=04ac543f98469334c684d8753&id=df629ce71c"
      >
        <div className={styles.cavalier}>
          <h2>Join the newsletter</h2>
        </div>
        <div className={styles.inner}>
          <label className={styles.inputGroup} htmlFor="mce-EMAIL">
            <span>Email Address</span>
            <input
              required
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              inputMode="email"
              placeholder="email@domain.com"
            />
          </label>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonContent} data-button-content>
              Subscribe
            </span>
          </button>
        </div>
      </form>
    </aside>
  )
}
