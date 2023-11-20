import componentsImg from "./assets/components.png";
import Header from "./components/layout/Header.jsx";
import Examples from "./components/layout/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";


function App() {
    
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}

export default App;
