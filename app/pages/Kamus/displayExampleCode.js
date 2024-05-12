import React from "react";

function DisplayExampleCode({ exampleCode }) {
  return (
    <pre tabIndex={0} className="srounded-b-md language-javascript">
      <code className="language-javascript">{exampleCode}</code>
    </pre>
  );
}

export default DisplayExampleCode;
