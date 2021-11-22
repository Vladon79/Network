import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import {  AddUsersAC, RemoveUsersAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC,} from '../../redux/users-reduser';
import Users from './UsersC';
import { UsersType } from '../../types/types';
import { isDoStatement } from 'typescript';


const mapStateToProps = (state: AppStoreType) => {
    
    return {
        users: state.usersPage.users , 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,  
        currentPage:state.usersPage.currentPage
    }
}

const mapDispachToProps = (dispatch: any) => {
    return {
        AddUsers: (usersID: number) => {
            dispatch(AddUsersAC(usersID))
            console.log(AddUsersAC(usersID))
        },
        RemoveUsers: (usersID: number) => {
            dispatch(RemoveUsersAC(usersID))
        },
        SetUsers: (users: Array<UsersType>) => {
           
            dispatch(SetUsersAC(users))
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(SetCurrentPageAC(currentPage))
        },
        SetTotalUsersCount:(totalUsersCount: number) =>{
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Users);