import ItemLists from "./ItemLists"

export default  CategoryList = ({data})=>{
    // console.log(data)
    
    

   
    


    return (
        <div>
        <h2 className="p-6 font-bold text-lg ">{data.title}</h2>
        {<ItemLists data={data.itemCards}/>}
        </div>
    )
}
