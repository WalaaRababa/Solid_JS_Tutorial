export default function Card(props)
{
    console.log(props);
return(
    <div class="bg-white p-4 text-center rounded-md shadow-md">
        <h2>title: {props.title} </h2>
{/* 
        <p class="text-sm text-justify text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur porro quam iure nesciunt numquam.</p>
        <button class="bg-amber-400 py-2 px-2 my-2 text-white rounded-md inline-block" >click me!</button> */}
        {props.children}
    </div>
)
}