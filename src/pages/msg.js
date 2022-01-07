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
    const linkName = new RegExp(/>?!\w+/);
    const image = new RegExp(/>?!img/);
    const textArray = props.message.split(' ');
    
    return (
        <p>
            {
                textArray.map( word => {
                    if(image.test(word)){
                        const imageStr = word.split('!');
                        return (<a key={word} href={imageStr[0]} target='_blank'
                                   className='imageLink'>
                                    <img key={word} src={imageStr[0]} ></img>
                                </a>);
                    }else if (linkName.test(word)){
                        const linkArray = word.split('!');
                        return(<a key={word} href={linkArray[0]} target="_blank">
                                {linkArray[1]}
                               </a>)
                    }
                    else if (link.test(word)){
                        return <a key={word} href={word} target='_blank'>{word}</a>
                    }else{
                        return ` ${word} `
                    }
                })
            }
        </p>
    );

}