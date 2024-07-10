import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locals/en.json'));
register('lo', () => import('./locals/la.json'));

init({
    fallbackLocale: 'lo',
    initialLocale: getLocaleFromNavigator(),
});