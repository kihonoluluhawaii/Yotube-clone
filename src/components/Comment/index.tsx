import styled from '@emotion/styled';
import { IComment } from '@/models/comment.ts';
import React from 'react';
import { formatCount } from '@/utils/formatCount.ts';
import { formatTimeAgo } from '@/utils/formatTimeAgo.ts';

interface Props {
  comment: IComment[] | undefined;
}
const Comment = React.memo(({ comment }: Props) => {
  console.log('@@ comment', comment);
  return (
    <Container>
      {comment?.map((item) => (
        <CommentorInfo key={item.id}>
          <AuthorProfile src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
          <CommentBox>
            <div>
              <ChannelName>{item.snippet.topLevelComment.snippet.authorDisplayName}</ChannelName>
              <span>{formatTimeAgo(item.snippet.topLevelComment.snippet.publishedAt)}</span>
            </div>
            <Text>{item.snippet.topLevelComment.snippet.textDisplay}</Text>
          </CommentBox>
        </CommentorInfo>
      ))}
    </Container>
  );
});

const Container = styled.div``;

const CommentorInfo = styled.div`
  display: flex;
  padding: 10px;
  gap: 14px;
`;

const AuthorProfile = styled.img`
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  > div {
    display: flex;
    gap: 10px;
    span {
      font-size: 12px;
      color: #aaa;
    }
  }
`;

const ChannelName = styled.div`
  align-self: flex-start;
  font-size: 13px;
  color: #f1f1f1;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 14px;
  color: #f1f1f1;
  line-height: 1.4;
`;
export default Comment;
