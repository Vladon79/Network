import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Friends from './Friends';
import { AddFriendsAC, RemoveFriendsAC, SetFriendsAC } from '../../redux/friends-reduser';
import { FriendsType } from '../../types/types';


const mapStateToProps = (state: AppStoreType) => {
    return {
        friends: state.friendsPage.friends

    }
}

const mapDispachToProps = (dispatch: any) => {
    return {
        AddFriends: (friendsID: number) => {
            console.log(friendsID)
            dispatch(AddFriendsAC(friendsID))
        },
        RemoveFriends: (friendsID: number) => {
            console.log(friendsID)
            dispatch(RemoveFriendsAC(friendsID))
        },
        SetFriends: (friends: Array<FriendsType>) => {
            dispatch(SetFriendsAC(friends))
        }

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(Friends);
export default FriendsContainer;