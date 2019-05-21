export type themeVariantType={
	(themeName: string,isDark?: Boolean|boolean): string,
}
const stringigy: Function=(arr: string[]):string=>{
	if(arr.length>1){
		let accum:string=''
		arr.forEach((e:string)=>accum+=(e+' '))
		return accum
	}
	return arr[0]
}
const themeVariant: themeVariantType=(
	themeName: string,isDark: Boolean=false):string=>
	isDark?stringigy(themeName.split(' ').map((name:string)=>name+'-dark')):themeName

export default themeVariant
