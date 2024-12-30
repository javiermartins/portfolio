import spanish from './es.json'
import english from './en.json'

export const defaultLang = 'es';

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    return lang;
}

export const getI18N = ({ currentLocale = defaultLang }: { currentLocale?: string }) => {
    if (currentLocale === LANGUAGES.SPANISH) return spanish;
    if (currentLocale === LANGUAGES.ENGLISH) return english;
    return spanish
}
