import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"


import {fetchArtistProfile} from "../../helpers/api-helpers"
import {requestArtist, receiveArtist, receiveArtistError} from "../../actions"
import ArtistProfile from "./ArtistProfile";

function ArtistRoute() {
    const dispatch = useDispatch();
    const artistId = useParams().id;
    
    const accessToken = useSelector((state) => state.auth.token);
    const currentArtist = useSelector((state) => state.artists.currentArtist);

    useEffect(() => {
        dispatch(requestArtist());

        fetchArtistProfile(accessToken, artistId)
        .then(data => dispatch(receiveArtist(data)))
        .catch(error => {
            console.error(error);
            dispatch(receiveArtistError())
        })

    }, [])

    return (currentArtist && <ArtistProfile profile={currentArtist.profile} />)
}

export default ArtistRoute
