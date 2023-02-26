import react, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = (props) => {
    let {puppy, setPuppy, fetchPuppyData} = props;
    let {detailId} = useParams();
    let puppyDetails = {};
    let [playersData, setPlayersData] = useState([])
    let playersDetail = {}

    for (let i = 0; i < puppy.length; i++) {
        if (puppy[i].id == detailId) {
            puppyDetails = puppy[i];
            break;
        }
    }

    let {breed, id, imageUrl, name, status, teamId} = puppyDetails;
    async function getPlayersData () {
        try {
            const response = await fetch("htpps://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/teams");
            const translatedData = await response.json();

            setPlayersData(translatedData.data.teams)
        } catch (e) {
            console.log(e)
        }
    }

    for (let j = 0; j < playersData.length; j++) {
        if (playersData[j].id == teamId) {
            playersDetail = playersData[j];
            break;
        }
    }

    let teamName = playersDetail.name;

    useEffect(() => {
        try {
        getPlayersData();
        fetchPuppyData();
        } catch (e) {
            console.log(e);
        }

    })

    return (
        <div className="detailsCon">
            <img className="detailsImage" src={imageUrl} />
            <div className="detailsText">
                <p className="detailsName">Name: <span className="detailsSpecifics">{name}</span></p>
                <p className="detailsBreed">Breed: <span className="detailsSpecifics">{breed}</span></p>
                <p className="detailsTeam">Team Name: <span className="detailsSpecific">{teamName}</span></p>
                <p className="detailsStatus">Status: <span className="detailsSpecifics">{status}</span></p>
                <p className="detailsId">Id: <span className="detailsSpecifics">#{id}</span></p>
            </div>
        </div>
    )

}

export default Details;