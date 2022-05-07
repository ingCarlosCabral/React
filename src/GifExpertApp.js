import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['South Park']);

    // const handledAdd = () =>{
    //    setCategories(cats => [...cats, 'five']);
    // }

    return (
        <div>
            <>
                <h2>GifExpertApp</h2>

                <AddCategory setCategories={setCategories}></AddCategory>
                <hr></hr>

                <ol>
                    {
                        categories.map(category => (
                            <GifGrid key={ category }
                                     category={ category }></GifGrid>
                        ))
                    }
                </ol>

            </>

        </div>
    )
}
