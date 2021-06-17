import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";

//parent component
// props : System for passing data from a Parent component to child component.
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="James"
          text="I am the gaurdian"
          time="1 days ago"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kara"
          text="I am supergirl"
          time="few hours ago"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          text="I am a green Martian"
          time="just now"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
