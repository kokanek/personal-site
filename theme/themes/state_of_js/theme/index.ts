import { DefaultTheme } from 'styled-components'
import colors from './colors'
import dimensions from './dimensions'
import typography from './typography'
import zIndexes from './zIndexes'

export const stateOfJSTheme: DefaultTheme = {
  typography,
  dimensions,
  colors,
  zIndexes,
  separationBorder: `1px solid ${colors.border}`,
  blockShadow: `0px 6px 16px rgba(0, 0, 0, 0.3), 0px 2px 6px rgba(0, 0, 0, 0.2)`,
}
