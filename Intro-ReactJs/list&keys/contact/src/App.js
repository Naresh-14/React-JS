import Contact  from "./components/Contact"
import "./App.css"


const contactDetails = [
  {
    name:"Naresh",
    number:"981347132"
  },{
    name:"Ramesh",
    number:"034958239"
  },
  {
    name:"Tharun",
    number:"08478258"
  },
  {
    name:"Vijay",
    number:"768245782"
  }
]


const App = () => (
  <div >
    <h1 className="title">Users Contact</h1>
    <ul className="list-container">
      {contactDetails.map((eachItem) => (
        <Contact contactDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App 