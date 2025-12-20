"use client";   

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export default function SearchField() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set("q",q.value.trim());
            router.push(`/news/search?${params.toString()}`);
        }
    };


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
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