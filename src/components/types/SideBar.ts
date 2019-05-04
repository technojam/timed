import React from 'react'
export interface SideBarPropType{
	SideBarHandler(args?: any): void,
	children?: React.ReactNode[],
	showSideBar?: Boolean,
}