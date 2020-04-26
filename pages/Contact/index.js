import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';
import {MdTagFaces} from 'react-icons/md';

const Contact = () => {

    useEffect(()=> {
        setTimeout(()=>{
            document.querySelector('#contactpage').style.opacity = '100%';
        }, 50);
    }, []);

    return <div id='contactpage'>
        <Header text='Contact me!' fontSize={24} />
        <CustomButton text='Email' />
        Contact
        <MdTagFaces color='red' />
    </div>
}

export default Contact;
