import React from 'react'
import {SideBarPropType} from './types/SideBar'
import '../styles/SideBar.css'
import themeVariant from '../utils/pretty'
const SideBar: React.FC<SideBarPropType>=(props: SideBarPropType)=>
{
	const toggle=()=>props.SideBarHandler(!props.showSideBar)
	return (
		<>
		<div className={themeVariant(props.showSideBar?"active":"hidden",props.isDark)}>
			<h1 className={themeVariant('sidebarTitle',props.isDark)}>Sidebar</h1>
			<div className={themeVariant('sidebar-content',props.isDark)}>
				Change theme to:&nbsp;
				<div
					className={themeVariant('Button',!props.isDark)}
					onClick={()=>props.themeToggler(!props.isDark)}
				>
					{props.isDark? 'Light':'Dark'}
				</div>
			</div>
		</div>
		<div
			className={themeVariant(props.showSideBar?'menuButton right':'menuButton',props.isDark)}
			onClick={toggle}
		>
		</div>
		</>
	)
}
export default SideBar
