import EditIcon from '@mui/icons-material/Edit';

import H1 from "@/components/Typography/H1";
import H3 from "@/components/Typography/H3";

export default function CreateContest() {
    return (
        <div className="ml-32 mt-14">
            <H1>Criar uma votação</H1>
            <div className='flex'>
                <div>
                    <div className="flex w-[520px] justify-between mt-16">
                        <div className="flex items-center">
                            <H3>Data de início</H3>
                        </div>
                        <input className="border-2 p-2 rounded-md border-gray-400" type="date" />
                    </div>
                    <div className="flex w-[520px] justify-between mt-6">
                        <div className="flex items-center">
                            <H3>Data de término</H3>
                        </div>
                        <input className="border-2 p-2 rounded-md border-gray-400" type="date" />
                    </div>
                    <div className="w-[520px] mt-6 mb-12">
                        <div className='flex items-center mb-3'>
                            <H3>Descrição do banner</H3>
                            <EditIcon />
                        </div>
                        <textarea
                            className='border-2 p-4 resize-none border-gray-400 rounded-md w-full' 
                            name="banner-description" 
                            id="banner-description" 
                            placeholder='Digite aqui' 
                            cols={56} 
                            rows={10}
                         />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center mt-12'>
                    <H3>Imagem do banner</H3>
                    <div className='w-[520px] h-[200px] border-2 border-gray-400 rounded-md mt-6'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-gray-400'>Arraste e solte ou clique para selecionar</p>
                        </div>
                    </div>
                    <button className='bg-yellow-500 text-white rounded-md px-8 py-3 mt-6'>Iniciar votação</button>
                </div>
            </div>
        </div>
    )
}