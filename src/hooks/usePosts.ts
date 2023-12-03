import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    userId: number;
    body: string;
}

const usePost = (userId: number | undefined) => {
    const fetchTodos = () =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts", { params: { userId } })
            .then((res) => res.data);

    return useQuery<Post[], Error>({
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: fetchTodos,

    });
};

export default usePost;
