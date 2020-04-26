import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*
var welcome = 'Welcome to my App!'
function setWelcome(){
    welcome = "Start with sending a message."
    document.querySelector("#welcome").innerText = welcome;
}
*/

const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("Welcome to my app!");
    const [msg, setMsg] = useState("Please type something");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState('#00FF00');
    const [text, setText] = useState('Click to change');

    useEffect(()=> {
        setTimeout(()=>{
            document.querySelector('#chatpage').style.left = 0;
        }, 50)
    }, []);
    
return <div id='chatpage'>
    <div id='welcome'>
        <Header fontSize={32} text='Welcome to my app!' />
    </div>
    <div id='chats' onClick={()=>{
        setWelcome("Start with sending a message.");
    }}>
        <Chat name={"User 1"} msg={msg} />
        <p />
        <Chat img={"https://miro.medium.com/max/4000/1*9ZvCnFHHwJxAd595SFHDgA.png"} name={"Chat Bot"} backgroundColor={'#FAB'} msg={resp} />
    </div>
    <div id='controls'>
        <Input onClick={(val)=>{
            setMsg(val);
            var new_resp = CheckResponse(val);
            setResp(new_resp)
            /*if(val === "hi"){
                setResp("I love pie");
            }
            */
        }} />
    </div>
    <div id='custom_button'>
        When the button is clicked, setColor to another color, and setText to another text
        <CustomButton color={color} text={text} onClick={()=>{
            setText('Changed')
            setColor('#228B22')
        }} />
    </div>
</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love Pie";
        case "how are you?":
            return "Great!"
        default:
            return "I dont understand what you are trying to say."
    }
}

ChatPage.defaultProps ={

}

export default ChatPage;