import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getPost } from '../../store/action';
import { IconButton } from "@material-ui/core";
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import './Post.css';

const Post = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost());
    }, [])
    const data = state.posts.data;

    const deleteBtn = (id) => {
        axios.post("http://localhost:5000/delete", { _id: id }).then((res) => {
            window.location.reload();
        });
    };

    return (
        <div>
            <div className="mainCard">
                {
                    data?.map((val) => {
                        return (
                            <div className="cards">
                                <div>
                                    <div className="bgImage"
                                        style={{ width: "100%", height: 180, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${val.selectedFile})` }}
                                    >
                                        <div className="first_decs">
                                            <div className="name_date">
                                                <h6>{val.creator}</h6>
                                                <h6>{moment(val.createdAt).fromNow()}</h6>
                                            </div>
                                            <div className="icon">
                                                <IconButton>
                                                    <LinearScaleIcon style={{ fontSize: "25px", color: "white" }} />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='second_desc'>
                                    <p>{val.tags}</p>
                                    <h5>{val.title}</h5>
                                    <p>{val.message}</p>
                                </div>
                                <div className="like_delete_container">
                                    <div className="like_Btn">
                                        <IconButton>
                                            <ThumbUpIcon />
                                        </IconButton>
                                        <span className='like_span'>0</span>
                                    </div>
                                    <div className="delete_Btn">
                                        <IconButton>
                                            <DeleteIcon onClick={() => deleteBtn(val._id)} />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Post;
