// Initial State - Theme
export type ThemeState = {
    theme: 'light' | 'dark' | 'green' | 'red'
}

// Action
type ChangeTheme = {
    type: 'CHANGE_THEME'
    payload: ThemeState['theme']   
}

// Export
export type ThemeAction = ChangeTheme