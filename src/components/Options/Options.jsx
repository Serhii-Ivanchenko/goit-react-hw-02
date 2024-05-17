import css from "./Options.module.css"

export default function Options({ onBtnClick, children }) {
  return <button className={css.btn} onClick={onBtnClick}>{children}</button>;
}
