import React from 'react';

export const Msg = (props) => {
    const msgClass = props.uid === props.currentUser ? 'sent' : 'recieved';
    const link = new RegExp(/http[^\s]+/);
    const image = new RegExp(/^(<img)/);

    const ConvertLink = () => {
        const textArray = props.text.split(' ');

        return (
            <p>
                {
                    textArray.map( word => {
                        if(link.test(word)){
                            return <a key={word} href={word} target='_blank'>{word}</a>
                        }else{
                            return ` ${word} `
                        }
                    })
                }
            </p>
        );

    }

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
                        {
                            <ConvertLink/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
