import s from "./Header.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <>
      <header className={s.headerPage}> {children}</header>
    </>
  );
}
