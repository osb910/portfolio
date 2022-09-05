import React, {createContext, useReducer} from 'react';

const AppContext = createContext({
  lang: '',
  onChangeLang: () => {},
  isNavOpen: false,
  onToggleNav: () => {},
});

const defaultState = {
  lang: JSON.parse(localStorage.getItem('lang')) || 'en',
  isNavOpen: false,
};

// const click = () => document.querySelector('#click-sfx').play();

const appReducer = (state, action) => {
  if (action.type === 'TRANSLATE') {
    return {...state, lang: action.lang};
  }

  if (action.type === 'TOGGLE_NAV') {
    return {...state, isNavOpen: action.act === 'OPEN'};
  }

  return defaultState;
};

export const AppProvider = props => {
  const [appState, dispatchApp] = useReducer(appReducer, defaultState);

  const translate = lang => {
    // click();
    dispatchApp({type: 'TRANSLATE', lang});
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  const toggleNav = act => {
    dispatchApp({type: 'TOGGLE_NAV', act});
    // localStorage.setItem('navState', JSON.stringify(act === 'OPEN_NAV'));
  };

  return (
    <AppContext.Provider
      value={{
        lang: appState.lang,
        isNavOpen: appState.isNavOpen,
        onChangeLang: translate,
        onToggleNav: toggleNav,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
