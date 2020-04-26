import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title:'My comps',
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick() {
    alert('cancel');
}

export const MyCustomButtonWithOptions = () => <CustomButton 
        text='Cancel'
        color='#999' 
        onClick = {CancelClick}
/>;

export const MyHeader = () => <Header />;
export const MyInput = () => <Input />;
export const MyInputWithPlaceholder = () => <Input 
    placeholder='Custom placeholder'/>;
export const MyChat = () => <Chat />;
export const MyChatPage = () => <ChatPage />;

/*export const PageWithCustomButtons = () => <div>
    <Header 
        fontSize={15}
        color="#ABC"
        onMouseOver={CancelClick}
    />
    <Header 
        fontSize={25}
        color="red"
        onMouseOver={OkClick}
    />

    <CustomButton 
        text='Cancel'
        color='#999' 
        onClick = {CancelClick}
    />
    <CustomButton 
        text='Ok'
        color='#3F5' 
        onClick = {OkClick}
    />
    <CustomButton 
        text='Submit'
        color='#F3F' />
    <CustomButton 
        text='Menu' />
</div>

function CancelClick() {
    alert('cancel');
}

function OkClick() {
    alert('Ok');
}
*/
