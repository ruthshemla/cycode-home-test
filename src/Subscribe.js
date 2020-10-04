import React, { useState } from 'react';
import Modal from 'react-modal';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { LOCAL_STORAGE_SUBSCRIPTION_KEY } from './constants';
import './Subscribe.css'

const { Option } = Select;

const Subscribe = ({onSubmit, msg}) => {
    const [showModal, setShowModal] = useState(false);
    const [maxTagCount, setMaxTagCount] = useState(Number.MAX_VALUE);
    const [value, setValue] = useState([]);

    const tags = msg ? msg.split(',') : [];
    const children = [];
    for( let i = 0; i < tags.length; i++ ) {
        children.push(<Option key={tags[i]}>{tags[i]}</Option>);
    }

    const handleSelectChange = value => {
        const count = value.length;
        setValue(value);
        if(maxTagCount === Number.MAX_VALUE && (window.innerWidth/20) < value.join().length) {
            setMaxTagCount(count - 1);
        }
    };
    
    const onSubmitClick = () => {
        localStorage.setItem(LOCAL_STORAGE_SUBSCRIPTION_KEY, value.join()) 
        onSubmit(value.join()); 
        setShowModal(!showModal); 
    };

    return (<div className="subscribe">
    <h1>Subscription Page</h1>
    <button className="subscribe-btn" onClick={() => setShowModal(!showModal)}>Subscribe to our channel</button>
    { showModal && 
    <Modal isOpen={showModal}
        contentLabel="Minimal Modal Example" 
        className="modal">
        <button className="close-btn" onClick={() => setShowModal(!showModal)}>X</button>
        <div className="modal-content">
        <Select mode="tags" 
            style={{ width: '100%' }} 
            placeholder="Tags Mode"
            listHeight={100}
            maxTagCount={maxTagCount}
            onChange={handleSelectChange}>
            {children}
        </Select>
            <button className="submit-btn" onClick={onSubmitClick}>
                <Link to="/">SUBMIT</Link>
            </button>
        </div>
    </Modal> }
</div>)}

export default Subscribe;