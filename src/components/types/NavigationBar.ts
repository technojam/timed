import React from 'react'
export type PageType={
	name: string,
	component: any,
}
export type PropType={
	pages: PageType[],
	highlight: number,
	highlightHandler: React.Dispatch<React.SetStateAction<number>>,
	isDark?: Boolean,
	themeName?: String,
}
export type StateType=Readonly<PageType[]|{}>
