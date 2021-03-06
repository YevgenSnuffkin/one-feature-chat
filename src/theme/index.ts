import * as styledComponents from 'styled-components'

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule< IThemeInterface >

export interface IThemeInterface {
    primaryColor: string
}

export { css, injectGlobal, keyframes, ThemeProvider }
export default styled
