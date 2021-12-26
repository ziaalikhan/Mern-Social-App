import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import FileBase from 'react-file-base64';
import Post from '../posts/Post';


const Home = () => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const input_Handler = (e) => {
        e.preventDefault();
        if (postData) {
            alert("Please Fill All the Input First.")
        } else {
            const data = {
                creator: postData.creator,
                title: postData.title,
                message: postData.message,
                tags: postData.tags,
                selectedFile: postData.selectedFile,
            };
            axios.post("http://localhost:5000/post", data).then((res) =>
                window.location.reload()
            );
        }


    }

    const clear_input_Handler = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <div className='container-fluid'>

            <div className="row">
                <div className="col-md-8">
                    <Post />
                </div>
                <div className="col-md-4">
                    <div className='allForms_container'>
                        <div className="inputs">
                            <input
                                value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                                type="text" placeholder='Creator' required />
                        </div>
                        <div className="inputs">
                            <input
                                value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                                type="text" placeholder='Title' required />
                        </div>
                        <div className="inputs">
                            <input
                                value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                                type="text" placeholder='Message' required />
                        </div>
                        <div className="inputs">
                            <input
                                value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                                type="text" placeholder='Tags' required />
                        </div>
                        <div className="inputs">
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />

                        </div>
                        <div className="submit_Btn">
                            <button onClick={input_Handler}>Submit</button>
                        </div>
                        <div className="clear_Btn">
                            <button onClick={clear_input_Handler}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
