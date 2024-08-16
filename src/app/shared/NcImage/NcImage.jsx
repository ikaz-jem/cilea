"use client"
import React, {

  useEffect,
  useRef,
  useState,
} from "react";
import checkInViewIntersectionObserver from "../../utils/isInViewPortIntersectionObserver";
import PlaceIcon from "./PlaceIcon";
import Image from "next/image";


const NcImage= ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "object-cover w-full h-full",
  ...args
}) => {
  const _containerRef = useRef(null);
  let _imageEl = null;

  const [__src, set__src] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current ,
      options: {
        root: null,
        rootMargin: "0%",
        threshold: 0,
      },
      freezeOnceVisible: true,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();
      return true;
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = src;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    setImageLoaded(true);
    set__src(src);
  };

  useEffect(() => {
    _checkInViewPort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const renderLoadingPlaceholder = () => {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
      >
        <div className="h-2/4 max-w-[50%]">
          <PlaceIcon />
        </div>
      </div>
    );
  };

  return (

        <Image width={800} height={800}  src={__src} className={className} alt={alt} {...args} />

  );
};

export default NcImage;
