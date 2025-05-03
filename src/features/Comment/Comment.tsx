import React, { useState } from "react";

interface CommentProps {
  postId: string;
  onAddComment: (postId: string, comment: string) => void;
}

const Comment: React.FC<CommentProps> = ({ postId, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(postId, comment);
      setComment("");
    }
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Comment;
