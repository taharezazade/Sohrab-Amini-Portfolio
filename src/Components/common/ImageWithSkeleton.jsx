/** @format */

import { forwardRef, useEffect, useRef, useState } from "react";

const ImageWithSkeleton = forwardRef(function ImageWithSkeleton(
  {
    src,
    alt = "",
    className = "",
    imageClassName = "",
    loading = "lazy",
    decoding = "async",
    draggable = false,
    sizes,
    srcSet,
  },
  ref,
) {
  const imageRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`
        relative
        ${className}
      `}>
      {!loaded && !error && (
        <div
          className='
            absolute
            inset-0
            z-10
            skeleton
            rounded-inherit
            animate-pulse
          '
        />
      )}

      <img
        ref={(node) => {
          imageRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding={decoding}
        draggable={draggable}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(true);
          setError(true);
        }}
        className={`
          w-full
          h-full
          transition-opacity
          duration-500
          ${loaded ? "opacity-100" : "opacity-0"}
          ${imageClassName}
        `}
      />
    </div>
  );
});

export default ImageWithSkeleton;
