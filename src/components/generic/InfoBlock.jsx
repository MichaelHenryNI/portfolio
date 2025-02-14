import "./InfoBlock.scss";
import React from "react";
import { useUtils } from "/src/helpers/utils.js";
import ImageView from "/src/components/generic/ImageView.jsx";
import FaIcon from "/src/components/generic/FaIcon.jsx";

const utils = useUtils();

function InfoBlock({ img, faIcon, faIconColors, html }) {
  return (
    <div className={`info-block`}>
      {(img || faIcon) && (
        <InfoBlockImageCol
          img={img}
          fallbackIcon={faIcon}
          fallbackIconColors={faIconColors}
        />
      )}

      <InfoBlockTextCol html={html} />
    </div>
  );
}

function InfoBlockImageCol({ img, fallbackIcon, fallbackIconColors }) {
  return (
    <div className={`info-block-image-col`}>
      {img && <ImageView src={img} alt={`logo`} />}
      {!img && (
        <FaIcon
          iconName={fallbackIcon}
          className={`display-6`}
          colors={fallbackIconColors}
        />
      )}
    </div>
  );
}

function InfoBlockTextCol({ html }) {
  const startYear = 2016;
  const startMonth = 5;
  const today = new Date();
  const yearsOfExperience =
    today.getFullYear() - startYear - (today.getMonth() < startMonth ? 1 : 0);

  const updatedHtml = html.replace(
    /(\d+)\s+years/,
    `${yearsOfExperience}+ years`
  );
  return (
    <div className={`info-block-text-col`}>
      <span
        className={`text-4`}
        dangerouslySetInnerHTML={{
          __html: utils.parseJsonText(updatedHtml),
        }}
      />
    </div>
  );
}

export default InfoBlock;
