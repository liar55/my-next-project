import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";

export default async function Page() {
    const { contents:news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return <NewsList news={news} />;
}