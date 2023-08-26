import Card from '../../components/Card';


const MainPage = () => {
    return (
        <div>
            <h1>Main</h1>
            <select>
                <option>По платформе</option>
                <option>По жанру</option>
            </select>
            <Card />         
        </div>

    )
}

export default MainPage;