import React from 'react'
import {useState} from 'react'
import {FunComp} from './types/App'
import '../styles/App.css'
import NavigationBar from './NavigationBar'
import SideBar from './SideBar'
import {PageType} from './types/NavigationBar'
const LoremIpsum: React.FC<{title?: string}>=({title="Lorem Ipsum"})=>{
	return (<>
		<h1>{title}</h1>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. A lacus vestibulum sed arcu. Libero volutpat sed cras ornare. Mattis aliquam faucibus purus in massa tempor nec. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. In fermentum et sollicitudin ac. Diam sollicitudin tempor id eu nisl nunc mi. Id nibh tortor id aliquet lectus proin nibh. Aliquam sem et tortor consequat id porta nibh. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Posuere lorem ipsum dolor sit.

Duis tristique sollicitudin nibh sit amet commodo. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Arcu odio ut sem nulla. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Lectus arcu bibendum at varius vel pharetra vel turpis. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Sit amet consectetur adipiscing elit ut aliquam purus sit. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Id aliquet risus feugiat in ante metus dictum at. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Suspendisse faucibus interdum posuere lorem. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Id semper risus in hendrerit gravida. Nisi porta lorem mollis aliquam ut porttitor leo a. Pharetra convallis posuere morbi leo. Arcu risus quis varius quam quisque. Mauris ultrices eros in cursus turpis massa. Malesuada pellentesque elit eget gravida. Elementum pulvinar etiam non quam. Phasellus faucibus scelerisque eleifend donec pretium vulputate.

Bibendum enim facilisis gravida neque convallis a cras semper auctor. Eu non diam phasellus vestibulum lorem sed risus. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. In hac habitasse platea dictumst vestibulum rhoncus. Sed turpis tincidunt id aliquet risus feugiat in ante. Amet nisl purus in mollis nunc sed id. Augue ut lectus arcu bibendum at varius vel. Enim tortor at auctor urna nunc id cursus. Diam sit amet nisl suscipit adipiscing bibendum est. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Ac orci phasellus egestas tellus rutrum. Nisi lacus sed viverra tellus. Quam id leo in vitae turpis massa. Vitae justo eget magna fermentum iaculis eu. Urna et pharetra pharetra massa massa ultricies mi quis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Cursus turpis massa tincidunt dui ut ornare. Bibendum ut tristique et egestas. Amet luctus venenatis lectus magna fringilla urna.

Malesuada proin libero nunc consequat interdum varius sit amet. Morbi tristique senectus et netus et malesuada. Penatibus et magnis dis parturient montes nascetur ridiculus. Integer enim neque volutpat ac tincidunt vitae. Venenatis tellus in metus vulputate eu scelerisque felis. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Nunc aliquet bibendum enim facilisis gravida neque. Morbi leo urna molestie at. Tempor orci eu lobortis elementum nibh tellus. Sit amet facilisis magna etiam tempor. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Egestas egestas fringilla phasellus faucibus. Congue nisi vitae suscipit tellus mauris. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Duis convallis convallis tellus id interdum velit laoreet.

Ornare aenean euismod elementum nisi quis. Pellentesque habitant morbi tristique senectus. Curabitur gravida arcu ac tortor dignissim. Nulla aliquet porttitor lacus luctus accumsan. Elementum nibh tellus molestie nunc. Massa tempor nec feugiat nisl pretium. Sit amet cursus sit amet. Malesuada bibendum arcu vitae elementum curabitur vitae. Amet nisl purus in mollis nunc sed id. Nunc sed velit dignissim sodales. Mus mauris vitae ultricies leo.
		</p>
	</>)
}
const pagesMap: PageType[]=[
	{name: "Timed",component: <LoremIpsum title={'Timed'}/>},
	{name: "Dashboard",component: <LoremIpsum title={'Dashboard'}/>},
	{name: 'Communities',component: <LoremIpsum title={'Communities'}/>},
	{name: 'Profile',component: <LoremIpsum title={'Profile'}/>},
]
const App: FunComp = () => {
	const [showSideBar,SideBarToggle]=useState(false)
	const [pageToHighlight,Highlighter]=useState(0)
  return (
	  <>
	<NavigationBar
		pages={pagesMap}
		highlight={pageToHighlight}
		highlightHandler={Highlighter}
	/>
	<SideBar showSideBar={showSideBar} SideBarHandler={SideBarToggle} />
	</>
  )
}

export default App
