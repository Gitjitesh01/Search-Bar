import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, searchTerm }) => {
  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="post-list">
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => <PostItem key={post.id} post={post} />)
      ) : (
        <p>No posts found matching your search.</p>
      )}
    </div>
  );
};

export default PostList;