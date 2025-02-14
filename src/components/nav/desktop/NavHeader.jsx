import "./NavHeader.scss";
import React from "react";
import { useUtils } from "/src/helpers/utils.js";
import { useLanguage } from "/src/providers/LanguageProvider.jsx";
import { useData } from "/src/providers/DataProvider.jsx";
import ImageView from "/src/components/generic/ImageView.jsx";

function NavHeader({ shrink }) {
  const utils = useUtils();
  const { getTranslation } = useLanguage();
  const { getSettings } = useData();

  const settings = getSettings();

  const profile = settings.profile;
  const stylizedName = utils.parseJsonText(profile["stylizedName"]);
  const role = utils.parseJsonText(getTranslation(profile["locales"], "role"));
  const pfpUrl = utils.resolvePath(profile["profilePictureUrl"]);

  return (
    <header className={`nav-header ${shrink ? "nav-header-shrink" : ""}`}>
      <ImageView src={pfpUrl} className={`img-view-avatar`} alt={name} />

      <div className={`info mt-3 text-center`}>
        <h5 className={`name`}>
          <span dangerouslySetInnerHTML={{ __html: stylizedName }} />
        </h5>

        <div className={`role`}>
          <span>{role}</span>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
