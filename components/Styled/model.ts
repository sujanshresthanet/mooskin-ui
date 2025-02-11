export interface IThemeFontColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	primary5: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	altWhite: string;
	background: string;
	blue400: string;
	teal400: string;
	teal500: string;
	pink400: string;
	orange400: string;
	red400: string;
	red600: string;
	green600: string;
	purple400: string;
	grayAlpha: string;
	grayAlpha100: string;
	grayAlpha400: string;
	gray100: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	darkgray3: string;
	text: string;
	inverseText: string;
	black: string;
	checkboxUnselected: string;
	dropdown: string;
	accountNavigation: string;
	submenu: string;
	autosExpression: string;
	client: string;
	createNew: string;
	menuDark: string;
	menuLight: string;
	editorRow: string;
	editorElement: string;
	editorRepeatable: string;
}

export interface IThemeBackgroundColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	primary5: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	altWhite: string;
	background: string;
	blue400: string;
	teal400: string;
	teal500: string;
	pink400: string;
	red400: string;
	red600: string;
	green600: string;
	purple400: string;
	orange400: string;
	grayAlpha: string;
	grayAlpha100: string;
	grayAlpha400: string;
	gray100: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	darkgray3: string;
	text: string;
	inverseText: string;
	black: string;
	checkboxUnselected: string;
	dropdown: string;
	accountNavigation: string;
	submenu: string;
	autosExpression: string;
	client: string;
	createNew: string;
	menuDark: string;
	menuLight: string;
	editorRow: string;
	editorElement: string;
	editorRepeatable: string;
}

export interface IThemeBorderColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	primary5: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	altWhite: string;
	background: string;
	blue400: string;
	teal400: string;
	teal500: string;
	pink400: string;
	red400: string;
	red600: string;
	green600: string;
	purple400: string;
	orange400: string;
	grayAlpha: string;
	grayAlpha100: string;
	grayAlpha400: string;
	gray100: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	darkgray3: string;
	text: string;
	inverseText: string;
	black: string;
	checkboxUnselected: string;
	dropdown: string;
	accountNavigation: string;
	submenu: string;
	autosExpression: string;
	client: string;
	createNew: string;
	menuDark: string;
	menuLight: string;
	editorRow: string;
	editorElement: string;
	editorRepeatable: string;
}

export interface IThemeStyles {
	buttonBorderRadius: string | number;
}

export interface IStyledTheme {
	fontColors: IThemeFontColors;
	backgroundColors: IThemeBackgroundColors;
	borderColors: IThemeBorderColors;
	styles?: IThemeStyles;
}

export interface IMooskinContext {
	palette?: IStyledTheme;
}
