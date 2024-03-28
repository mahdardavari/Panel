import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import APIClient from "src/services/api-client";

// const apiClient = new APIClient<Post>("/posts");
interface Post {
    id: number;
    title: string;
    userId: number;
    body: string;
}

const usePost = (userId: number | undefined) => {
    const fetchTodo = () =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts", { params: { userId } })
            .then((res) => res.data);

    return useQuery<Post[], Error>({
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: fetchTodo,

    });
};

export default usePost;
