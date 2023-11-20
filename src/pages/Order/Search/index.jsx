import Input from "./Input.jsx"
import styles from './Input.module.scss';
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