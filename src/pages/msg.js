import React from 'react';

export const Msg = (props) => {
    const msgClass = props.uid === props.currentUser ? 'sent' : 'recieved';

    return(
        <div id="cont" className={msgClass}>
            <img id="usrPhoto" src={props.photoURL}></img>
            <div id="msgText">
                <p id="userName">
                    {props.displayName}
                    <br/>{props.sentAt}
                </p>
                <div id="textBubble">
                    <div>
                        { <MsgText message={props.text}/> }
                    </div>
                </div>
            </div>
        </div>
    );
}

const MsgText = (props) => {
    const link = new RegExp(/http[^\s]+/);
    const image = new RegExp(/jpg|jpeg|png|gif|tif/);
    const textArray = props.message.split(' ');
    
    return (
        <p>
            {
                textArray.map( word => {
                    if (link.test(word)){
                        if(image.test(word)) 
                            return (
                                <a key={word} href={word} target='_blank'
                                    className='imageLink'>
                                    <img key={word} src={word}></img>
                                </a>
                            );
                        return <a key={word} href={word} target='_blank'>{word}</a>
                    }else{
                        return ` ${word} `
                    }
                })
            }
        </p>
    );

}