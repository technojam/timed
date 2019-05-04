import React from 'react'
import {SideBarPropType} from './types/SideBar'
import '../styles/SideBar.css'
const SideBar: React.FC<SideBarPropType>=(props: SideBarPropType)=>
{
	const toggle=()=>props.SideBarHandler(!props.showSideBar)
	return (
		<>
		<div className={props.showSideBar?"active":"hidden"}
			onClick={toggle}
		>
			SideBar Container
		{props.showSideBar?<h1>SideBar Content</h1>:null}
		</div>
		</>
	)
}
export default SideBar