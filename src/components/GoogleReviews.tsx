const SOCIABLEKIT_EMBED_ID = "25705159";

export function GoogleReviews() {
  return (
    <>
      <div
        className="sk-ww-google-reviews"
        data-embed-id={SOCIABLEKIT_EMBED_ID}
      />
      <script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        defer
      />
    </>
  );
}

