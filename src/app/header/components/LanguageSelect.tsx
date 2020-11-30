import React, { useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../constants';

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(languages[0]);

  const handleSetLanguage = async (event: React.ChangeEvent<{ value: unknown }>) => {
    const lang = event.target.value as string;
    await i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <Select onChange={handleSetLanguage} value={language}>
      {languages.map((lang) => <MenuItem value={lang} key={lang}>{lang.toUpperCase()}</MenuItem>)}
    </Select>
  );
};

export default LanguageSelect;
