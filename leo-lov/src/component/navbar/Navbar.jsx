import style from "./navbar.module.scss";

export function Navbar() {
  return (
    <section className={style.navSection}>
      <nav>
        <ul>
          <li>
            <a href="#">Hjem</a>
          </li>
          <li>
            <a href="#">Advokaterne</a>
          </li>
          <li>
            <a href="#">Om LeoLov</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
      <div>
        <h2>Leo</h2>
        <span>-Lov</span>
      </div>
    </section>
  );
}
