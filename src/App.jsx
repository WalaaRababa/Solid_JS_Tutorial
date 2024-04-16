import banner from './assets/banner.png'
import Card from './components/Card';
function App() {
  return (
    <div class='container m-auto'>
<header>
<h1>Hello Ndddddinja</h1>
</header>
<img  class='rounded-md' src={banner} alt='sit banner'/>
<div class='grid grid-cols-4 my-4 gap-10'>
<Card title="ninja hat">
<p class="text-sm text-justify text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur porro quam iure nesciunt numquam.</p>
        <button class="bg-amber-400 py-2 px-2 my-2 text-white rounded-md inline-block" >click me!</button>
        </Card>
<Card/>
<Card/>
</div>

    </div>
  );
}

export default App;
