import style from "./cards.module.scss";

export function Cards() {
  return (
    <section className={style.cards}>
      <div className={style.wrapper}>
      <article>
        <h2>Familieret</h2>
        <p>
          Familieret er en ret alle har. Har du en familie har du sikkert ret
          til familieret. Medmindre du altid er den der tror du har ret. Så kan
          vi desværre ikke hjælpe dig.
        </p>
      </article>
      <article>
        <h2>Ejendomsret</h2>
        <p>
          Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl
          ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt
          sagsøge vedkommende der solgte dig det.
        </p>
      </article>
      <article>
        <h2>Konkurs</h2>
        <p>
          Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi
          desværre ikke. Vi er alle advokater med fede biler her så har du ingen
          penge får du ingen hjælp
        </p>
      </article>
      <article>
        <h2>Selskabsret</h2>
        <p>
          Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et
          stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der
          ved en masse om dette så henvend dig i dag.
        </p>
      </article>
      </div>
    </section>
  );
}
