import React from "react";
const Link = ({href, className, children}) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
