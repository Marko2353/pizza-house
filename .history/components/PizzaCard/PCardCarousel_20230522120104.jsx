
import React from 'react'

export default function PCardCarousel(props) {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props




    return (
        <div className='relative flex items-stretch p-2 border border-white border-solid sm:p-3 '>

            <div className='flex flex-1'>
                {!(edit === todoKey) ? <>{children}</> : (
                    <input className='flex-1 text-white outline-none bg-inherit' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />
                )}
                {/* {children} */}
            </div>
            <div className='flex items-center'>
                {(edit === todoKey) ? <i onClick={handleEditTodo} className="px-2 duration-300 cursor-pointer fa-solid fa-check hover:scale-125"></i> : <i onClick={handleAddEdit(todoKey)} className="px-2 duration-300 cursor-pointer fa-solid fa-pencil hover:rotate-45"></i>}
                <i onClick={handleDelete(todoKey)} className="px-2 duration-300 cursor-pointer fa-solid fa-trash-can hover:scale-125"></i>
            </div>
        </div>
    )
}