const Home = () => {

    const handleClick = (e) => {
        console.log("hello O", e)
    }

    const handleClickAgain = (name) => {
        console.log(`hello ${name}`)
    }
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => handleClickAgain("mario")}>Click me again!</button>

        </div>
     );
}
 
export default Home;