import React from 'react'
import {PropType,PageType} from './types/NavigationBar'
import '../styles/NavigationBar.css'
import clamp from 'lodash-es/clamp'
import {useSprings,animated} from 'react-spring'
import {useGesture} from 'react-with-gesture'
import themeVariant from '../utils/pretty'

const NavigationBar: React.FC<PropType>=(props: PropType)=>{
	const ForeignComponent=props.pages[props.highlight].component
	const [springs, set] = useSprings(props.pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
	if (down && distance > window.innerWidth / 2){
		const clampVar = clamp(props.highlight + (xDir > 0 ? -1 : 1), 0, props.pages.length - 1)
		props.highlightHandler(clampVar)
		if(cancel)
			cancel()
	}
    set(1/*(i: number) => {
	  if (i < props.highlight - 1 || i > props.highlight + 1)
	  	return { display: 'none' }
      const x = (i - props.highlight) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    }*/)
  })
	return (
		<>
		<header className={themeVariant('navigation',props.isDark)}>
			{props.pages.map((page:PageType,id: number)=>(
				id!==props.highlight?
				<h1
					className={themeVariant('passiveNav',props.isDark)}
					key={id}
					onClick={()=>props.highlightHandler(id)}
				>
					{page.name}
				</h1>:
				<h1 className={themeVariant('activeNav',props.isDark)} key={id}>{page.name}</h1>
			))}
		</header>
		<section className={themeVariant('theme',props.isDark)}>
			{ForeignComponent}
		</section>
		</>
	)
}

export default NavigationBar
