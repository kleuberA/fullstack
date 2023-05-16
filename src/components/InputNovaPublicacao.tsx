'use client'

import axios from "axios";


function NovaPublicacao(session: any) {
    const user = session;
    // console.log(user);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(e.target[0].value);
        if (!user.session.user.id) return console.log('error');
        if (e.target[0].value) {
            axios.post('/api/post', {
                userId: user.session.user.id,
                content: e.target[1].value,
                filtro: e.target[0].value,
            })
                .then((res) => {
                    console.log(res);
                    e.target[1].value = '';
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                )
        } else {
            alert('Digite algo para publicar');
        }
    };

    return (
        <div className="w-full bg-zinc-900/30 rounded border-2 border-zinc-800 p-2 flex flex-col justify-end items-end">
            <form className="w-full flex flex-col justify-end items-end" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-2">
                    <label htmlFor="filtro" className="text-zinc-400 text-sm font-medium">Filtro</label>
                    <select name="filtro" id="filtro" className="bg-transparent border-2 border-zinc-800 rounded text-zinc-400 text-sm font-medium p-1 ml-2">
                        <option value="publico">Público</option>
                        <option value="amigos">Amigos</option>
                        <option value="privado">Privado</option>
                    </select>
                </div>
                <textarea className="resize-none outline-none rounded w-full h-28 text-zinc-400 p-2 bg-transparent border-2 border-zinc-800" name="" id=""></textarea>
                <button type="submit" className="bg-green-400 transition-colors hover:text-zinc-800 text-zinc-900 p-1 text-sm font-medium rounded w-32 mt-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300">
                    Enviar Publicação
                </button>
            </form>
        </div>
    )
}

export default NovaPublicacao;