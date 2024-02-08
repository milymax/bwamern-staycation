import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Button(props) {
  const className = [props.classNames];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onclick = () => {
    if (props.onClick) props.onClick();
  };

  if ( isDisabled || isLoading) {
    
  }

  if (props.type === "Link") {
    if (props.Eksternal) {
      return (
        <a
          href="props.href"
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link to="props.href" className={className.join(" ")} style={props.style} onClick={onclick}>
          {props.children}
        </Link>
      )
    }
  }

  return <Button
    className={className.join(" ")} style={props.style} onClick={onclick}
  >{props.children}</Button>;
}

Button.propTypes = {
  type: propTypes.oneOf([Button, Link]),
  onclick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
