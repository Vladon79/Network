import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Friends from './Friends';
import { AddUsersAC, RemoveUsersAC, SetUsersAC } from '../../redux/users-reduser';
import { UsersType } from '../../types/types';



const mapStateToProps = (state: AppStoreType) => {
    return {
        friends: state.usersPage.users

    }
}

const mapDispachToProps = (dispatch: any) => {
    return {
        AddFriends: (friendsID: number) => {
           
            dispatch(AddUsersAC(friendsID))
        },
        RemoveFriends: (friendsID: number) => {
           
            dispatch(RemoveUsersAC(friendsID))
        },
        SetFriends: (friends: Array<UsersType>) => {
            dispatch(SetUsersAC(friends))
        }

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(Friends);
export default FriendsContainer;