import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    // eslint-disable-next-line jsx-a11y/alt-text
    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        className={(styles.wrapper, className)}
        ref={ref}
        {...props}
        alt={alt}
        src={fallback || src}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};
export default Image;
