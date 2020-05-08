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
            <Name>{profile.name}</Name>
            <Followers>{nFormatter(profile.followers.total, 0)}<span> followers</span></Followers>
            <Tags>Tags</Tags>
                <Genre>{profile.genres[0]}</Genre>
                <Genre2>{profile.genres[1]}</Genre2>
        </ProfileWrapper>
    )
}

const  Genre2 = styled.p `
    position: absolute;
    width: 34px;
    height: 29px;
    left: 230px;
    top: 528px;

    /* GrayFade */

    background: rgba(75, 75, 75, 0.4);
    border-radius: 4px;
    color: white;
`

const Genre = styled.p `
    position: absolute;
    width: 150px;
    height: 29px;
    left: 61px;
    top: 528px;
    /* GrayFade */

    background: rgba(75, 75, 75, 0.4);
    border-radius: 4px;
    color: white;
`

const Tags = styled.p `
    position: absolute;
    width: 48px;
    height: 26px;
    left: 164px;
    top: 478px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    /* identical to box height */

    text-transform: lowercase;

    /* White */

color: #FFFFFF;
`

const Followers = styled.p `
    /* display: flex; */
    position: absolute;
    width: 93px;
    height: 17px;
    left: 141px;
    top: 257px;
    

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    text-transform: lowercase;
    color: #FF4FD8;

    span {
        color: white;
    }
`

const Name = styled.p `
    position: absolute;
    width: 268px;
    height: 59px;
    left: 80px;
    top: 150px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;

    color: #FFFFFF;
    text-shadow: 4px 8px 25px #000000, 0px 4px 4px rgba(0, 0, 0, 0.5), 1px 2px 2px rgba(0, 0, 0, 0.75);
`

const ProfileWrapper = styled.div `
    position: relative;
    width: 375px;
    height: 812px;

    background: #0B0F14;
`

const ProfilePic = styled.img `
    position: absolute;
    width: 175px;
    height: 175px;
    left: 104px;
    top: 59px;

    border-radius: 190.5px;
`

export default ArtistProfile
