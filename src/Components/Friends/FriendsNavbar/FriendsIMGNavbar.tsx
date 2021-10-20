import React from "react"
import { FriendsType } from "../../../state/state"



export const FriendsImgNavbar = (props: FriendsType) => {

    return (
        <div>
            <div>{props.name}</div>
            <div> <img src={props.ava} />
            </div>
        </div>
    )


}