import React from 'react'
import {Component,ReactNode} from 'react'
import {PropType,StateType,PageType} from './types/NavigationBar'
import '../styles/NavigationBar.css'
export default class NavigationBar extends Component<PropType,StateType>{
	static state: StateType={}
	constructor(props: PropType){
		super(props)
		this.state=props.pages
	}
	render(): ReactNode{
		const ForeignComponent=this.props.pages[this.props.highlight].component
		console.log(ForeignComponent)
		return (
			<>
			<header className={'navigation'}>
				{this.props.pages.map((page:PageType,id: number)=>(
					id!==this.props.highlight?
					<h1
						className={'passiveNav'}
						key={id}
						onClick={()=>this.props.highlightHandler(id)}
					>
						{page.name}
					</h1>:
					<h1 className={'activeNav'} key={id}>{page.name}</h1>
				))}
			</header>
			<section>
				{ForeignComponent}
			</section>
			</>
		)
	}
}