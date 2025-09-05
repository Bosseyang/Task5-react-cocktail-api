import { FavoriteContext } from "./context"


export const Favorites = (): ReactElement => {
    const { favorites } = useContext(FavoriteContext);

    const renderFavorites = (): ReactNode => {
        if (favorites.length) {
            return favorites.map((f) => <Cocktail></Cocktail>)
        }
    }
    return <section className="favorites"></section>
}