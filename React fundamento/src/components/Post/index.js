import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

import { Container, Subtitle, Rate } from "./styles";

export default function Post(props) {
  return (
    // className={props.post.removed ? styles.postDeleted : styles.post}
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <br />
      <Rate>Media: {props.likes / 2}</Rate>
    </Container>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};
