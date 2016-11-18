import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import {grey200, green700, green800} from 'material-ui/styles/colors'

darkBaseTheme.palette.primary1Color = green800
darkBaseTheme.palette.primary2Color = green700
darkBaseTheme.palette.alternateTextColor = grey200

export default getMuiTheme(darkBaseTheme)
