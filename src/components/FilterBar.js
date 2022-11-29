import React, {useEffect, useState} from 'react';
import appData from "../assets/app-data.json";
import CaveItem from "./CaveItem";


function FilterBar(props) {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const [genre, setGenre] = useState("All");
    const [decade, setDecade] = useState("All Decades");

    const [data, setData] = useState([]);

    const matchSelectedGenre = (item) => {
        if (genre === "All") {
            return true
        } else if (genre === item.type) {
            return true
        } else {
            return false
        }
    };

    const matchSelectedDecade = (item) => {
        //TODO: change any to all
        if (decade === "All Decades") {
            return true
        } else if (decade === item.decade) {
            return true
        } else {
            return false
        }
    };

    const filteredData = appData.filter(matchSelectedGenre).filter(matchSelectedDecade);


    //Sorting the catalog by the selected sortType
    const [sortType, setSortType] = useState('price');
    useEffect(() => {
        const sortArray = type => {
            const types = {
                album: 'name',
                price: 'price',
                artist: 'description',
            };
            const sortProperty = types[type];
            if(sortProperty ==='price'){
                const sorted = [...filteredData].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setData(sorted);
            } else if (sortProperty ==='name'){
                const sorted = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
                setData(sorted);
            } else {
                const sorted = [...filteredData].sort((a, b) => a.description.localeCompare(b.description));
                setData(sorted);
            }
        };

        sortArray(sortType);
    }, [sortType, genre, decade]);




    return (
        <div className="main-section">
            <div className= "filter-container">
                <div>
                    <h3>Sort By</h3>
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="price">Price</option>
                        <option value="album">Album Name</option>
                        <option value="artist">Artist Name</option>
                    </select>
                </div>

                <div>
                    <h3>Shop by Genre</h3>
                    <select onChange={(e) => {setGenre(e.target.value)}}>
                        <option eventKey="All">All</option>
                        <option eventKey="Pop">Pop</option>
                        <option eventKey="Alternative/Indie">Alternative/Indie</option>
                        <option eventKey="Classic Rock">Classic Rock</option>
                        <option eventKey="R&B">R&B</option>
                    </select>
                </div>

                <div>
                    <h3>Shop by Decade</h3>
                    <select onChange={(e) => {setDecade(e.target.value)}}>
                        <option eventKey="All Decades">All Decades</option>
                        <option eventKey="70s">70s</option>
                        <option eventKey="80s">80s</option>
                        <option eventKey="90s">90s</option>
                        <option eventKey="2000s">2000s</option>
                        <option eventKey="2010s">2010s</option>
                        <option eventKey="2020s">2020s</option>
                    </select>
                </div>

                <div className="favorites-container">
                    <h2>Your Favorites</h2>
                    {cartItems.map((item) => (
                        <p>{item}</p>
                    ))}
                    <p>Favorites Total: ${cartTotal.toFixed(2)}</p>
                </div>
            </div>


            <div className="catalog-container">
                {data.map((item) => (
                    <CaveItem cartItems={cartItems} cartTotal={cartTotal}
                              setCartTotal={setCartTotal} setCartItems={setCartItems}
                              itemName={item.name} itemImg={item.image}
                              itemDesc={item.description} itemGenre={item.type} itemDecade={item.decade} price={item.price}/>
                ))}
            </div>



        </div>
    );



}

export default FilterBar;
