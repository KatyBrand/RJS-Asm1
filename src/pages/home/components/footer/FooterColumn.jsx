import React from "react";
const FooterColumn = (props) => {
  return (
    <div>
      {/* Map qua data để hiện từng item trong Footer */}
      {props.data.map((e) => {
        return (
          <a href="./" style={{ textDecoration: "none" }} key={Math.random()}>
            <br />
            {e}
          </a>
        );
      })}
    </div>
  );
};
export default FooterColumn;
