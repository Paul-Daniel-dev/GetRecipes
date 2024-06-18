import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const API_ID = import.meta.env.VITE_API_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchRecipes = async (searchQuery) => {
		setLoading(true);
		setRecipes([]);
		try {
			const res = await fetch(
				`https://api.edamam.com/api/recipes/v2/?app_id=${API_ID}&app_key=${API_KEY}&q=${searchQuery}&type=public`
			);
			const data = await res.json();
			setRecipes(data.hits);
			console.log(data.hits);
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRecipes("pasta");
	}, []);

	const handleSearchRecipe = (e) => {
		e.preventDefault();
		fetchRecipes(e.target[0].value);
	};

	return (
		<div className='bg-[#faf9fb] p-10 flex-1'>
            
			<div className='max-w-screen-lg mx-auto'>
            <h1 className="text-2xl mb-3 text-black"><span className="font-bold">Welcome</span> to our delightful haven of culinary creations, where every recipe is a journey for your taste buds! Our extensive library is a feast for the eyes and the palate, brimming with mouth-watering dishes that come to life in vibrant YouTube videos. Whether you're a seasoned chef or a kitchen newbie, our step-by-step guides make cooking a breeze and eating an adventure. So tie on your apron, hit play, and let's whip up some fun in the kitchen together!</h1>
				<p></p>
                <br/>
                <form onSubmit={handleSearchRecipe}>
					<label className='input shadow-md flex text-white items-center gap-2 bg-red-700'>
						<Search size={"24"} />
						<input
							type='text'
							className='text-sm placeholder-white md:text-md grow'
							placeholder='What do you want to cook today?'
						/>
					</label>
				</form>

				<h1 className='font-serif font-bold text-3xl text-black md:text-5xl mt-4'>Recommended Recipes</h1>
				<p className='text-black font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>

				<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{!loading &&
						recipes.map(({ recipe }, index) => (
							<RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
						))}

					{loading &&
						[...Array(9)].map((_, index) => (
							<div key={index} className='flex flex-col gap-4 w-full'>
								<div className='skeleton h-32 w-full'></div>
								<div className='flex justify-between'>
									<div className='skeleton h-4 w-28'></div>
									<div className='skeleton h-4 w-24'></div>
								</div>
								<div className='skeleton h-4 w-1/2'></div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;