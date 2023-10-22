import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between flex-wrap bg-[#1C3380] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6 ml-6">
                <Image className="fill-current h-8 w-8 mr-2" width="54" height="54" src="\images\logoproatransparente.svg" alt='logo do PROA' />
                <span className="font-semibold text-xl tracking-tight">Lojinha do PROA</span>
            </div>
            <div className="w-full flex-grow flex items-center w-auto">
                <div className="text-sm flex-grow">
                <a href="#responsive-header" className="block inline-block mt-0 text-white hover:text-gray-300 mr-6">
                    Início
                </a>
                <a href="#responsive-header" className="block inline-block mt-0 text-white hover:text-gray-300 mr-6">
                    Produtos
                </a>
                <a href="#responsive-header" className="block inline-block mt-0 text-white hover:text-gray-300 mr-6">
                    Votação
                </a>
                <a href="#responsive-header" className="block inline-block mt-0 text-white hover:text-gray-300">
                    Envie seu design
                </a>
                </div>
                <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded border-transparent text-white hover:border-transparent hover:text-black hover:bg-amber-400 mt-0 mr-5">Entrar</a>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded border-transparent text-white hover:border-transparent hover:text-black hover:bg-amber-400 mt-0">Cadastro</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
