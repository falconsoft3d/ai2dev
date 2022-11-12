import React, { useState, useRef, useEffect }  from 'react'
import JSZip from "jszip";

export default function AiZone() {
    const selectCode = useRef();
    const selectTemplate = useRef();
    const textCode = useRef();
    const refName = useRef();


    const text2code = async (code) => {
        const zip = new JSZip();
        if (code in [ "simple template", "1- Simple Template", "Simple Template" ]) {
            zip.file("init.py", code);
        }


        
        zip.file("code.txt", code);
        const content = await zip.generateAsync({type:"blob"});
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${refName.current.value}.zip`;
        a.click();
        }



    const handleSubmit = async (e) => {
        console.log("handleSubmit");
        e.preventDefault();
        const code = selectCode.current.value;
        text2code(code);
    }

    useEffect(() => {
        console.log("useEffect");
    }, [selectCode,selectTemplate]);

    return (
    <>
    <div className="flex">  
    <div className='m-auto'>
        <form class="w-full max-w-lg" onSubmit={handleSubmit}>

            <div className='m-5'>
                <h1 class="text-4xl bollde">Ai2Dev</h1>
            </div>

            <div className='m-5'>
                <h1 className="text-gray-500">Describe what you want to create</h1>
            </div>

            

            <div className='m-5'>
                <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                    ref={selectTemplate}>
                    <option>Odoo 16.0</option>
                </select>
            </div>

            <div className='m-5'>
                <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                    ref={selectCode}
                >
                    <option>1- Simple Template</option>
                    <option>2- Template Create</option>
                    <option>3- Template Hide</option>
                </select>
            </div>

            <div className='m-5'>
                    <input ref={selectCode} 
                        className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="code" type="text"
                        required
                        placeholder="Name" ref={refName}/>
            </div>

            <div className='m-5'>
                <textarea className='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    ref={textCode} required>
                    
                </textarea>
            </div>

            <div className='m-5'>
                <p className='text-gray-500'>create module call ticket with this fields (name, datecreate, user).</p>
            </div>

            <div className='m-5'>
                <button  type="submit" class="shadow bg-purple-800 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Create
             </button>
            </div>
        </form>
        </div>

    </div>
    </>
  );
}
