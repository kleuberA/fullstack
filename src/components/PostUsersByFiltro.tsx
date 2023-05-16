'use client';

import axios from "axios";
import { useState } from "react";

type Post = {
    id: number,
    userId: number,
    content: string,
    filtro: string,
    createdAt: string,
    updatedAt: string,
}

function AllPost() {

    let [post, setPosts] = useState<Post[]>([]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await axios.post('/api/post/allposts', {
            filtro: e.target[0].value || 'publico',
        })
            .then(function (response) {
                // console.log(response.data.posts);
                setPosts(response.data.posts);
            })
    }

    return (
        <div className="mt-5 p-2 w-full bg-zinc-900/30 rounded border-2 border-zinc-800 flex flex-col">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-2">
                    <label htmlFor="filtro" className="text-zinc-400 text-sm font-medium">Filtro</label>
                    <select name="filtro" id="filtro" className="bg-transparent border-2 border-zinc-800 rounded text-zinc-400 text-sm font-medium p-1 ml-2">
                        <option value="publico">Público</option>
                        <option value="amigos">Amigos</option>
                        <option value="privado">Privado</option>
                    </select>
                </div>
                <button type="submit">Enviar</button>
            </form>
            {post.map((post: any) => (
                <div key={post.id}>
                    <p>{post.content}</p>
                    <p>Author: {post.authorId}</p>
                    <p>Created At: {post.createdAt}</p>
                </div>
            ))}
        </div>
    )
}

export default AllPost;