import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { useState } from "react";
import i18n from "../../config/i18n";

function LanguageTranslate() {
    const [currentLanguage, setCurrentLanguage] = useState('pt');


    const handleChangeLanguage = (ev: any) => {

        i18n.changeLanguage(ev.target.value);
        setCurrentLanguage(ev.target.value);
    };

    return <>
        <S.FooterLangSection
            value={currentLanguage}
            onChange={handleChangeLanguage}>
            <option value="pt">Português(Brasil)</option>
            <option value="en">inglês(USA)</option>
        </S.FooterLangSection>
        
    </>
}

export default LanguageTranslate