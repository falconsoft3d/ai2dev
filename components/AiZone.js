import React  from 'react'

export default function AiZone() {
  return (
    <>
    <div className="flex">  
    <div className='m-auto'>
        <form class="w-full max-w-lg">
            <div className='m-5'>
                <h1 className="text-gray-500">Describe what you want to create</h1>
            </div>

            <div className='m-5'>
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Odoo 16.0</option>
                </select>
            </div>

            <div className='m-5'>
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>1- Template Create</option>
                    <option>2- Template Hide</option>
                </select>
            </div>

            <div className='m-5'>
                <textarea className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                </textarea>
            </div>

            <div className='m-5'>
                <p className='text-gray-500'>create module call ticket with this fields (name, datecreate, user).</p>
            </div>

            <div className='m-5'>
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Create
             </button>
      </div>
        </form>
        </div>

    </div>
    </>
  );
}
