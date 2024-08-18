 # here we will make a login button that will change login to logout and vice versa by clicking on the button using useState
 ---  onClick={() => {
                btn === "login" ? setBtn("Logout"): setBtn("login") ;
              }}



 # 2nd we will make a input box and filter the list basedd on entered text

 to filter we have to make  a new state then we have to provide its initial value to the listOfRestraurant then then filter using the new variable

  const [filteredList, setFilterdList]=useState(listOfRestaurants)

  const list = listOfRestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterdList(list);