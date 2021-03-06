import React from 'react'
export interface SideBarPropType{
	SideBarHandler(args?: any): void,
	children?: React.ReactNode[],
	showSideBar?: Boolean,
	themeName?: String,
	isDark: Boolean,
	//themeToggler?: Boolean,
	themeToggler: React.Dispatch<React.SetStateAction<boolean>>,
}
