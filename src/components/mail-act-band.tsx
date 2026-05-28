import s from "./mail-act-band.module.css";

export function MailActBand({
  title,
  em,
  subtitle,
}: {
  title: string;
  em: string;
  subtitle: string;
}) {
  return (
    <div className={s.band}>
      <div className={`container ${s.inner}`}>
        <h2 className={s.title}>
          {title} <span className={`serif-italic ${s.em}`}>{em}</span>
        </h2>
        <div className={s.rule} />
        <p className={s.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
