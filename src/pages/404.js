import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

export const Head = () => <title>Not found</title>;

export default function NotFoundPage() {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>404: Page not found</h1>
      <p style={paragraphStyles}>
        Uh oh, this page doesn't exist.
        <Link to="/"> Go back to the homepage</Link>.
      </p>
    </main>
  );
}
