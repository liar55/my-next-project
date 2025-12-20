import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    serchParams: {
        q?: string;
    };
};

export default async function Page({ serchParams }: Props) {
    const { contents:news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: serchParams.q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news}/>
        </>
    );
}
