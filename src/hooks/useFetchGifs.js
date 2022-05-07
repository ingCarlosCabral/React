import { useState, useEffect } from "react"
import { getGifs_ } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs_(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    })


    return state;



}