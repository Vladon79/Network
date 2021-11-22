import React from "react"
import { UsersType } from "../../../types/types"




export const FriendsImgNavbar = (props: UsersType) => {

    return (
        <div>
            <div>{props.name}</div>
            <div> <img src={props.ava} />
            </div>
        </div>
    )


}