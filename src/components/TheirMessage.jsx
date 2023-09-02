
const TheirMessage = ({lasMessage, message}) => {
    const isFirstMessageByUser = !lasMessage || lasMessage.sender.username !== message.render.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div   className="message-avater" style={{backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                />

    
            )}

            {message.attachments && message.attachments.length > 0
            ?(  <img
                src={message.attachment[0].file}
                alt="messege-attachment"
                className="message-image"
                style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                 />
                 )
                 : (
                    <div className="message" style={{float: 'left', backgroundColor: '#CABCDC',
                    marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                    {message.text}            
                </div>
                 )}

        </div>
    );
};

export default TheirMessage;