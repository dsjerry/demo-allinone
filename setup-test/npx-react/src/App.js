import logo from "./logo.svg"
import "./App.css"
import {
    useEffect,
    useRef,
    useContext,
    createContext,
    useState,
    useCallback,
} from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, addCount } from "./store/modules/counterStore"

const Msg = createContext("")
function App() {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counter)
    const imgRef = useRef(null)

    const handleInput = useCallback(e => {
        console.log(e.target.value)
    }, [])

    useEffect(() => {
        console.log(imgRef.current)
    })
    return (
        <div className="App">
            <header className="App-header">
                <input type="text" onChange={handleInput} />
                <span style={{ color: "red" }}>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(addCount(20))}>+20</button>
                <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
                <p>
                    Edit <code>src/App.js</code> and save to reload
                </p>
                <Msg.Provider value="Learn React">
                    <Link />
                </Msg.Provider>
            </header>
        </div>
    )
}

function Link() {
    const msg = useContext(Msg)
    const { data, setData } = useData()
    console.log(data)
    return (
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            {msg}
        </a>
    )
}

function useData() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchMsg = async () => {
            const res = await fetch("https://api.github.com/users")
            const data = await res.json()
            setData(data)
        }
        fetchMsg()
    }, [])
    return { data, setData }
}

export default App
