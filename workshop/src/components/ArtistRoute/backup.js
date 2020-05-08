import React from 'react'
import styled from "styled-components"

function ArtistProfile({profile}) {
    // function found online at https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
    // formats numbers based on size based on typical connotations
    function nFormatter(num, digits) {
        const si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
        ];
        const rx = "/\.0+$|(\.[0-9]*[1-9])0+$/";

        //let i refuses to be declared in the for loop, reason unknown
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
            break;
            }
        }
        // returns formatted number
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        }

    return (
        <ProfileWrapper>
            <ProfilePic src={profile.images[0].url} alt="picture" />
            <p>{profile.name}</p>
            <p><span className="bold">{nFormatter(profile.followers.total, 0)}</span> <span>followers</span></p>
            <p className="title">Tags</p>
            <li>{profile.genres[0]}</li>
            <li>{profile.genres[1]}</li>
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled.div `
    /* display */
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* color */
    background: whitesmoke;
    color: black;
    border: red 1px solid;
    
    /* size */
    width: 500px;
    height: 600px;
    margin: auto;
    margin-top: 40px;
`

const ProfilePic = styled.img `
    width: 60%;
    margin-top: 10px;
    border-radius: 2px;
`

export default ArtistProfile
