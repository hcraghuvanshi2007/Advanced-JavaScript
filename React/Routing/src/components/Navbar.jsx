function App() {
    return (
        <nav>
            <Navlink to="/" style={({isActive}) => ({color: isActive         ? "red" : "blue"})}>Home</Navlink>
            <Navlink to="/about" style={({isActive}) => ({color: isActive ? "red" : "blue"})}>About</Navlink>
            <Navlink to="/contact" style={({isActive}) => ({color: isActive ? "red" : "blue"})}>Contact</Navlink> 

        </nav>
    )
}
export default App;