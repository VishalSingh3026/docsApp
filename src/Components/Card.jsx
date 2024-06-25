import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data ,reference}) => {
  return (
<motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-5 overflow-hidden'>
     <FaRegFilePdf/>
     <p className='text-sm leading-tight mt-5 font-semibold '>
       {data.desc}
     </p>
     <div className='footer absolute bottom-0 w-full py-5 left-0'>
         <div className='flex items-center justify-between mb-5 p-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ?<IoClose />: <FaDownload size=".7em" color='#fff' />}
           </span>
           </div>
           {
            data.tag.isOpen?(
                <div className={`tag absolute bottom-0  w-full py-3 left-0 ${data.tag.tagColor === "blue" ? "bg-blue-600" :"bg-green-600"}  flex items-center justify-center`}>
                <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                </div>
            ): null
           }

         </div>
   </motion.div> 
  );
}

export default Card
