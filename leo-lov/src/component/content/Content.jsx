import style from "./content.module.scss";
import building from '../../assets/building.jpg'
import money from '../../assets/money.jpg'

export function Content() {
  return (
    <>
      <section className={style.content}>
      <img src={money} alt="" />
        <article>
          <h2>Intet problem</h2>
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er
            simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
            så længe du har penge. Hvis du mod alt forventning skulle oplevel at
            støde på et retsligt problem som leo-lov ikke kan løse får du
            halvdelen af beløbet igen. <br />
            Det er sådan vi har skabt en forretning der ikke kan andet end at
            vokse!
          </p>
        </article>
      </section>
      <section className={style.content}>
        <article>
          <h2>Her bor vi</h2>
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er
            simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
            så længe du har penge. Hvis du mod alt forventning skulle oplevel at
            støde på et retsligt problem som leo-lov ikke kan løse får du
            halvdelen af beløbet igen. <br />
            Det er sådan vi har skabt en forretning der ikke kan andet end at
            vokse!
          </p>
          <img src={building} alt="" />
        </article>
      </section>
    </>
  );
}
