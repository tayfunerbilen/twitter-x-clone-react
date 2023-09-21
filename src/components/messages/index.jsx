import { RiMailAddLine } from 'react-icons/ri'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'




export default function Messages() {
    return(
        <div className="fixed flex flex-row w-96 items-center bottom-0 right-10 border-t-gray-600 border-x-gray-600 border-t border-x rounded-t-lg px-4 py-2 shadow-upper shadow-gray-300">
            <div className='flex items-center'>
                <label className="flex text-2xl font-bold">Mesajlar</label>
            </div>
            <div className='flex flex-row ml-auto gap-2 items-center'>
                <div className='text-2xl'>
                    <RiMailAddLine/>
                </div>
                <div className='text-2xl'>
                    <MdKeyboardDoubleArrowUp/>
                </div>
            </div>
        </div>
    )
}