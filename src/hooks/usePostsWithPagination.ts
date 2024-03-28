import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    userId: number;
    body: string;
}

interface PostQuery {
    page: number;
    pageSize: number;
}

const usePostsWithPagination = (query: PostQuery) => {
    const fetchTodo = () =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _start:(query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then((res) => res.data);

    return useQuery<Post[], Error>({
        queryKey: ["posts", query],
        queryFn: fetchTodo,
        staleTime: 1 * 60 * 1000, //1m doesn't request if its less than a minute old
    });
};

export default usePostsWithPagination;
