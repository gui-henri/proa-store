import EditIcon from '@mui/icons-material/Edit';

import H3 from "@/components/Typography/H3";
import { EditCalendar } from '@mui/icons-material';

export default function EditContest() {
    return (
        <div className="ml-32 mt-14 mr-32">
            <div>
                <div className='flex w-full justify-between'>
                    <div>
                        <H3><EditCalendar /> Editar datas</H3>
                        <div className='flex gap-8 mt-4 mb-8'>
                            <div>
                                <span className='p-4'>Início</span>
                                <input className="border-2 p-2 rounded-md border-gray-400" type="date" />
                            </div>
                            <div>
                                <span className='p-4'>Término</span>
                                <input className="border-2 p-2 rounded-md border-gray-400" type="date" />
                            </div>
                        </div>
                        <div className="w-[520px] mt-6 mb-12">
                            <div className='flex items-center mb-3'>
                                <EditIcon />
                                <H3> Descrição do banner</H3>
                            </div>
                            <textarea
                                className='border-2 p-4 resize-none border-gray-400 rounded-md w-full h-48' 
                                name="banner-description" 
                                id="banner-description" 
                                placeholder='Digite aqui' 
                                cols={56} 
                                rows={10}
                            />
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-end'>
                        <button className='px-3 py-2 h-14 bg-red-600 text-white rounded-md'>Cancelar votação</button>
                        <div className='mt-16'>
                            <H3>Imagem do banner</H3>
                            <div className='w-[520px] h-[200px] border-2 border-gray-400 rounded-md mt-6'>
                                <div className='flex items-center justify-center h-full'>
                                    <p className='text-gray-400'>Arraste e solte ou clique para selecionar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}