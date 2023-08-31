 import MessageForm from "./MessageForm";
 import MyMessage from "./myMessage";
 import TheirMessage from "./theirMessage";

const ChatFeed = (props) => {
      
    const {chats, activeChat, userName, message} = props;

    const chat = chats && chats[activeChat];

    const renderMessage = () => {
        const keys = Object.keys(message);

        return keys.map((key, index) => {
            const message = message[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.userName;
            
            return (
                <div key={ `msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        { isMyMessage 
                            ? <MyMessage  message={message}/>
                            :<TheirMessage  message={message} lasMessage={message[lastMessageKey]}/>}
                    </div>
    
                    <div className="read-reciepts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}></div>
                </div>
            );
        
        });
    };

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">

                </div>
                {renderMessage()}
                <div style={{height : '100px'}} />

                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
                </div>
            </div>
            
        </div>
    )

       
    }

export default ChatFeed;