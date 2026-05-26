import s from "./phone-frame.module.css";

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.frame}>
      <div className={s.screen}>{children}</div>
    </div>
  );
}
