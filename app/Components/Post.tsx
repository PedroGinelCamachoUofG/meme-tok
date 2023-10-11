type PostProps = {
  user_id: string;
  gif_url: string;
};

function Post({ user_id, gif_url }: PostProps) {
  console.log(gif_url);
  return (
    <div className="v6_3">
      <div className="v26_224">
        <div className="v21_93">
          <img src={gif_url} />
        </div>
        <span className="v6_33">BOB{user_id}</span>
        <span className="v21_152">Bob{user_id}</span>
        <span className="v21_156">Liked by 100 </span>
        <span className="v21_153">Caption </span>
        <div className="v21_151" />
      </div>
    </div>
  );
}

export default Post;
