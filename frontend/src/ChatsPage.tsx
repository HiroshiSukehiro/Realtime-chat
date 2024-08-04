import { PrettyChatWindow } from "react-chat-engine-pretty";

interface Props {
  user: any;
}

const ChatsPage: React.FC<Props> = ({ user }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_PROJECT_ID}
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
