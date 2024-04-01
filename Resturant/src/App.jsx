import { useState } from 'react';
// import './App.css'
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './components/Data';

const allCategories =['All', ...new Set(items.map((item) =>item.category))];
function App() {
	const[menuItems, setMenuItems] =useState(items);
	const[categories, setCategories] =useState(allCategories);

	const filterItems =(category) =>{
		if(category ==='All'){
			setMenuItems(items);
			return;
		}
		const newItems =items.filter((item) =>item.category ===category);
		setMenuItems(newItems);
	}
  return (
	<main >
    <div className='App'>
		<div className='title'>
			<h1 className='heading'> Our Menu </h1>
			<div className='underline'></div>
		</div>
		<div className='cat-menu'>
		<Categories categories ={categories} filterItems ={filterItems}/>
		<Menu menuItems ={menuItems}/>
		</div>
    </div>
	</main>
  )
}

export default App;
