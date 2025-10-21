import { lightenColor, toHexColorString } from "@/utils/hex-color";
import React, { useMemo } from "react";

const CategoryShape = ({
  color,
  className,
}: {
  color: number;
  className?: string;
}) => {
  const lightColor2 = lightenColor(color, 0.5);
  const lightColor = lightenColor(color, 0.8);

  const uniqueId = useMemo(
    () => Math.random().toString(36).substring(2, 9),
    [],
  );
  const id = (base: string) => `${base}_${uniqueId}`;

  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="11 6 510 185"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id={id("filter0_d")}
            x="0"
            y="0"
            width="532"
            height="197"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>

          <filter
            id={id("filter1_d")}
            x="0"
            y="0"
            width="532"
            height="197"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>

          <filter
            id={id("filter2_f")}
            x="-0.856445"
            y="37"
            width="529.856"
            height="155"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur"
            />
          </filter>

          <filter
            id={id("filter3_d")}
            x="344"
            y="6"
            width="186"
            height="167"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>

          {/* clip path */}
          <clipPath id={id("clip1")}>
            <path
              d="M6 14C6 9.58172 9.58172 6 14 6H518C522.418 6 526 9.58172 526 14V183C526 187.418 522.418 191 518 191H14C9.58172 191 6 187.418 6 183V14Z"
              fill="white"
            />
          </clipPath>

          {/* gradients */}
          <linearGradient
            id={id("paint0_linear")}
            x1="526"
            y1="191"
            x2="6"
            y2="5.99999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={toHexColorString(color)} />
            <stop offset="1" stopColor={toHexColorString(lightColor)} />
          </linearGradient>

          <linearGradient
            id={id("paint1_linear")}
            x1="7.93982"
            y1="116.902"
            x2="528"
            y2="116.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={toHexColorString(lightColor2)} />
            <stop offset="1" stopColor={toHexColorString(color)} />
          </linearGradient>

          <linearGradient
            id={id("paint2_linear")}
            x1="386"
            y1="6"
            x2="452"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.45" stopColor="white" />
            <stop offset="1" stopColor="#E0E0E0" />
          </linearGradient>
        </defs>

        <g
          filter={`url(#${id("filter0_d")})`}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <path
            d="M6 14C6 9.58172 9.58172 6 14 6H518C522.418 6 526 9.58172 526 14V183C526 187.418 522.418 191 518 191H14C9.58172 191 6 187.418 6 183V14Z"
            fill={`url(#${id("paint0_linear")})`}
            clipPath={`url(#${id("clip1")})`}
            filter={`url(#${id("filter1_d")})`}
          />
          <path
            d="M7.93982 148.393C236 198 528 38 528 38V191H7.93982C7.93982 191 -9.60178 144.578 7.93982 148.393Z"
            fill={`url(#${id("paint1_linear")})`}
            filter={`url(#${id("filter2_f")})`}
            clipPath={`url(#${id("clip1")})`}
          />
          <path
            d="M370.227 6H526V145.049C526 145.049 405.837 189.939 363.365 145.049C325.164 104.675 370.227 6 370.227 6Z"
            fill={`url(#${id("paint2_linear")})`}
            filter={`url(#${id("filter3_d")})`}
            clipPath={`url(#${id("clip1")})`}
          />
        </g>
      </svg>
    </div>
  );
};

export default CategoryShape;
