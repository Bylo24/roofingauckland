import { useEffect } from "react";

// Replace this with your SociableKIT Google Reviews widget embed ID.
const SOCIABLEKIT_EMBED_ID = "";

export function GoogleReviews() {
  useEffect(() => {
    if (!SOCIABLEKIT_EMBED_ID) return;

    const scriptId = "sociablekit-google-reviews";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  if (!SOCIABLEKIT_EMBED_ID) {
    return (
      <div className="text-center py-8 text-sm text-muted-foreground">
        <p className="font-medium">Google Reviews widget ready</p>
        <p className="mt-1">
          Add your SociableKIT embed ID in{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            src/components/GoogleReviews.tsx
          </code>{" "}
          to display live reviews.
        </p>
      </div>
    );
  }

  return (
    <div
      className="sk-ww-google-reviews"
      data-embed-id={SOCIABLEKIT_EMBED_ID}
    />
  );
}

