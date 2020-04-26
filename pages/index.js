import Link from 'next/link'
import Router from 'next/router';
import {FaSearchDollar} from 'react-icons/fa';
import {GiEvilTree} from 'react-icons/gi'
import './index.css'


function ClickIndex(){

    document.querySelector('#mainapp').style.right = '-100%';  
    setTimeout(function(){
        Router.push('/ChatPage');
    }, 1000)
}

const Index = () => <div id='mainapp'>
    <div onClick={ClickIndex}>Index</div>
    <FaSearchDollar />
    
    <Link href='/ChatPage'><button><GiEvilTree color='#ABC' /> Chats!</button></Link>
    <Link href='/Contact'><button>Contact Me!</button></Link>
</div>

export default Index;