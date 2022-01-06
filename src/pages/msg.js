import React from 'react';

export const Msg = (props) => {
    const msgClass = props.uid === props.currentUser ? 'sent' : 'recieved';
    const link = new RegExp(/(?<!\p{L})http[^\s]+(?!\p{L})/);
    const image = new RegExp(/^(<img)/);

    const ConvertLink = () => {
        if(link.test(props.text)){
            const splitByRegex = props.text.split(link);
            
            const theLink = props.text.match(link)

            return(<p>
                {splitByRegex[0]}
                <a href={theLink} target="_blank" >{theLink}</a>
                {splitByRegex[1]}
                </p>)
        }
        return (<p>{props.text}</p>)
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