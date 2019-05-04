export type PageType={
	name: string,
	component: any,
}
export type PropType={
	pages: PageType[],
	highlight: number,
	highlightHandler(args: any): void, 
}
export type StateType=Readonly<PageType[]|{}>