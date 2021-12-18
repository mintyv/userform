import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './action';


function Posts(props) {

    const dispatch = useDispatch();
const value = useSelector((state)=>
{
    return state;
})

    
    useEffect(()=>{
        dispatch(fetchPosts());

    },[dispatch])

const renderPosts = () => {
    if(value.loading){
        return<h1>Loading...</h1>
    }

    return value.items.map(el => {
    return <h3 key={el.id}>{el.title}</h3>
    })
}
return (
    <div>
        {renderPosts()}
)
    </div>
    );
}

export default Posts;
