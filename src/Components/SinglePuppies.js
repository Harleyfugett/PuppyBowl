// import react, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const SinglePuppies = (props) => {
//     const { detailsId } = useParams();
//     const { puppy, setPuppy, puppyProps } = props;
//     let puppyDetails = {};
//     let teamDetail = {};
//     const [teamData, setTeamData] = useState([]);

//     const mySelectedPuppy = puppyProps[detailsId]

//     for (let i = 0; i < puppy.length; i++) {
//         if (puppy[i].id == detailsId) {
//             puppyDetails = puppy[i];
//             break;
//         }
//     }

//     let {breed, id, imageUrl, name, status, teamId} = puppyDetails;

//     async function getPlayersData () {
//         try {
//             const response = await fetch("htpps://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/teams");
//             const translatedData = await response.json();
//             let setTeamData = translatedData.data.teams
//             setPuppy(teams)
            
//         } catch (e) {
//             console.log(e)
//         }
//     }



//     let teamName = puppyDetails.name;

//     useEffect(() => {
//         try {
//             getPlayersData();
//         } catch (e) {
//             console.log(e);
//         }

        



//     })
//     return (
//         <div>
//             <p>Name: {mySelectedPuppyname}</p>
//             <p>{mySelectedPuppy.url}</p> 
            
//         </div>

//     //     <div className="detailsCont">
//     //         <img className="detailsImage" src={imageUrl} />
//     //         <div className="detailsText">
//     //             <p className="detailsName">Name: <span className="detailsSpecifics">{name}</span></p>
//     //             <p className="detailsBreed">Breed: <span className="detailsSpecifics">{breed}</span></p>
//     //             <p className="detailsTeam">Team Name: <span className="detailsSpecific">{teamName}</span></p>
//     //             <p className="detailsStatus">Status: <span className="detailsSpecifics">{status}</span></p>
//     //             <p className="detailsId">Id: <span className="detailsSpecifics">#{id}</span></p>
//     //         </div>
//     // // </div>

//     )
// }

// export default SinglePuppies;


import { useParams } from "react-router-dom";

const SinglePuppies = (props) => {
    const { id } = useParams();

    console.log(props.puppyProps)
    console.log(props.puppyProps[id])

    return (
        <div className="cards">
            <a href={props.puppyProps[id].url}>Image would be here
                {props.puppyProps[id].url}
            </a>
            <p>Name: {props.puppyProps[id].name}</p>
            <p>Breed: {props.puppyProps[id].breed}</p>
            <p>Team ID: {props.puppyProps[id].teamId}</p>
            <p>Status: {props.puppyProps[id].status}</p>
            <p>ID: {props.puppyProps[id].id}</p>
        </div>
    )
}

export default SinglePuppies;