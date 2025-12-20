import Image from "next/image";
import styles from "./index.module.css";

export default function SearchField() {
    return (
        <form className={styles.form}>
            <label className ={styles.label}>
                <Image src="/serch.svg" alt="検索" width={16} height={16} />
                <input 
                  type ="text"
                  name ="q"
                  placeholder="キーワードを入力"
                  className={styles.serchInput}
                />
            </label>
        </form>
    )
}