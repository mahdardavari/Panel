import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
    id: number;
    title: string;
    userId: number;
    body: string;
}

const usePosts = (userId: number | undefined) => {
    const fetchTodo = () =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    userId
                }
            })
            .then((res) => res.data);

    return useQuery<Post[], Error>({
        // /users/1/posts
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: fetchTodo,
        staleTime: 1 * 60 * 1000 //1m doesn't request if its less than a minute old

    });
};

export default usePosts;
