import React from 'react';
import s from "../../Profile.module.css";



const MyPosts =(props) =>{
    return(
        <div>
            <div className={s.item}>
                <img
                    src='https://cdn.powered-by-nitrosell.com/public_html/12/2853/media/images/blog/photos/img-dogs-farting.jpg'
                    alt="dog"/> <div>{props.post}</div>
                <div>{props.likesCount}</div></div>
            <div>{props.friend}</div>
        </div>

    )

}

export default MyPosts;