import {MultiChatWindow, MultiChatSocket, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '907d4a55-6d8d-41c9-89ef-0bbb34f65bed',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
  );
}

export default ChatsPage;