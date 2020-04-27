import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';
import {MdTagFaces, MdPhotoSizeSelectSmall} from 'react-icons/md';

var index = 0
const headers_arr = [
    'thanks for contacting me!',
    'goodbye',
    'let me know if you have any other questions',
    // {
    //     text:'adasdad',
    //     img:'http://img.jpg'
    // }
]

const Contact = () => {
    // step 1 - create the state variable and the function to update it, and put a default inside
    const [header_text, setHeader] = useState("Contact me!");
    // const [img_url, setImg] = useState('');
    const [pageleft, setLeft] = useState('-100%');
    //const [index, setIndex] = useState(0);

    useEffect(()=> {
        setTimeout(()=>{
            setLeft(0);
        }, 50);

        return ()=>{
            //what to do when the component dies
        }
    }, []);

    useEffect(()=>{
        //what to do when its created/born/begining of the life cycle
    }, []);

    useEffect(()=>{
        //what to do when a state in the page or component updates
        //alert('hi! header text has changed')
        setLeft(20)
        setTimeout(()=>{
            setLeft(0)
        }, 500);
    }, [header_text]);

    //step 2 - connect the state variable to the ui
    return <div id='contactpage' style={{left:pageleft}}>
        <Header text={header_text} fontSize={24} />
        {/* <img src={img_url} /> */}
        <CustomButton text='email' onClick={()=>{
            //step 3 - connect the state function() to an interaction or figure out when you want to update the interface
            setHeader(headers_arr[index]);
            // setImg(header_arr[index].img)
            index++
            if(index > headers_arr.length){
                index = 0
            }
            // setLeft('100%')
        }}/>
        <CustomButton text='Email' />
        Contact
        <MdTagFaces color='red' />
    </div>
}

export default Contact;
