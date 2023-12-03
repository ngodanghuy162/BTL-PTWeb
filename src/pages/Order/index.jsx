import Input from "./Search/index.jsx"
import styles from './Search/Search.module.scss';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/ScrollUp/ScrollUp";

const Search = () => {
    return (
        <div className={styles['Search']}>
            <Header />
            <Input/>
            <Footer />
            <ScrollUp />
        </div>
    )
}

export default Search;