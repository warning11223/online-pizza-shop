import React, {useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock, Loader} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const Main = () => {
    const dispatch = useDispatch();

    const pizzas = useSelector(({pizzas}) => pizzas.pizzas);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { sortBy, category } = useSelector(({filters}) => filters);
    const cartItems = useSelector(({cart}) => cart.items)


    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const onSelectCategory = (index) => {
        dispatch(setCategory(index))
    }

    const onClickSortType = (type) => {
        dispatch(setSortBy(type))
    }

    const onClickAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    onCategory={onSelectCategory}
                    activeItem={category}
                />

                <SortPopup
                    items={[{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'name'}]}
                    activeSortType={sortBy}
                    onClickSortType={onClickSortType}
                />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoaded
                    ? pizzas.map(item => <PizzaBlock cartItems={cartItems[item.id] && cartItems[item.id].items.length} onClickAddPizza={(obj) => onClickAddPizza(obj)} key={item.id} {...item}/>)
                    : Array(10).fill(0).map((item, index) => (<Loader key={index} />))}

            </div>
        </div>
    );
};

export default Main;
