import "./Story.scss";

function Story({ index = null, story, showText }) {
  const { id, title, url, by, score, kids, time } = story;
  const domain = url ? new URL(url) : null;

  return (
    <>
      <div className="story">
        {index !== null && <div className="story__index">{index + 1}. </div>}
        <div>
          <a
            className="story__title"
            href={domain ? domain : `/articles/${id}`}
          >
            {title}
          </a>{" "}
          {domain && (
            <small>
              (
              <a
                href={`https://news.ycombinator.com/from?site=${domain.hostname}`}
              >
                {domain.hostname}
              </a>
              )
            </small>
          )}
          <br />
          <small>
            {score} points by {by} |{" "}
            {new Date(time * 1000).toLocaleDateString()} |{" "}
            {kids && kids.length > 0 ? kids.length : 0} comments
          </small>
        </div>
      </div>
      {showText && (
        <div
          className="story__text"
          dangerouslySetInnerHTML={{ __html: story.text }}
        />
      )}
    </>
  );
}

export default Story;
