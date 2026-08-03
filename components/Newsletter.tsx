export function Newsletter() {
  return (
    <aside id="newsletter">
      <form
        method="post"
        rel="noopener"
        target="_blank"
        action="https://gmail.us20.list-manage.com/subscribe/post?u=04ac543f98469334c684d8753&id=df629ce71c"
      >
        <div className="cavalier newsletter-cavalier">
          <h2>Join the newsletter</h2>
        </div>
        <div className="newsletter-inner">
          <label className="input-group" htmlFor="mce-EMAIL">
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
          <button type="submit" className="sauce-button">
            <span className="sauce-button__content">Subscribe</span>
          </button>
        </div>
      </form>
    </aside>
  )
}
