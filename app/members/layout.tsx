import styles from "./page.module.css";

type Props = {
  children: React.ReactNode;
};

export default function MembersLayout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}