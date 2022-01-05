type Typewind = {
    init(): string,
    beforeTransition(): void,
    toggle: () => void,
    enable: (dark: boolean) => void,
    oldtoggle: () => void,
    oldenable: (dark: boolean) => void,
    dark: boolean,
    getDark: () => boolean,
    mount: () => void
}
import nightwind from 'nightwind/helper'
const nwind: Typewind = nightwind
nwind.oldtoggle = nwind.toggle
nwind.oldenable = nwind.enable
nwind.getDark = () => {
    const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
        return persistedColorPreference === "dark"? true:false;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
        return mql.matches
    }
    return false;
}
nwind.mount = () => {
    // i do this otherwise i get Error(window is not defined)
    nwind.dark = nwind.getDark()
}
nwind.toggle = () => {
    nwind.dark = !nwind.dark
    nwind.oldtoggle()
}
nwind.enable = (dark: boolean)=>{
    nwind.dark = dark
    nwind.oldenable(dark)
}
export default nwind