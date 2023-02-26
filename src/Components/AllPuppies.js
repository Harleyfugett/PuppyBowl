import { useState } from "react"
import { Link } from "react-router-dom"

const AllPuppies = (props) => {
    const { puppyProps } = props;

    const [searchQuery, setSearchQueary] = useState("");

    let filteredPuppies = puppyProps.filter((singlePuppyElement) => {
        let lowercasedName = singlePuppyElement.name.toLowerCase();
        console.log(lowercasedName)

return lowercasedName.includes(searchQuery.toLowerCase())

    })

    return (
        <div>

            <input className="navBar"
                type="text" placeholder="Search specific puppy"
                onChange={(event) => {
                    setSearchQueary(event.target.value)
                }}
            > 

            </input>
            <div className="fullCont">
            {
                filteredPuppies.length ? filteredPuppies.map((singlePuppyElement, idx) => {
                    return (
                        <div className="cards" key={idx}>
                            {/* <p>{singlePuppyElement.name}</p> */}
                            <Link to={`/players/${idx}`} className={`puppyCont num${singlePuppyElement.teamId}`} key={singlePuppyElement.id}> 
                            <img className="detailsImage" src={singlePuppyElement.imageUrl}/>
                            <div className="textCont"></div>
                            <p className="puppyName">{singlePuppyElement.name}</p>
                            </Link>
                            
                        </div>
                    )
                }) : <div>No data yet</div>
            }
            </div>
        </div>
    )
}

export default AllPuppies;