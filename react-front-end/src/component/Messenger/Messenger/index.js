import React, { useState } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import "./Messenger.css";

export default function Messenger(props) {
  const [activeConversation, setActiveConversation] = useState([0, 0]);

  return (
    <div className="messenger">
      {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

      {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

      <div className="scrollable sidebar">
        <ConversationList
          activeUser={props.activeUser}
          setActiveConversation={setActiveConversation}
        />
      </div>

      <div className="scrollable content">
        <MessageList
          activeUser={props.activeUser}
          activeConversation={activeConversation}
        />
      </div>
    </div>
  );
}
