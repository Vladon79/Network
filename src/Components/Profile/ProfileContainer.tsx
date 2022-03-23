import {connect} from 'react-redux';
import React from "react"
import {AppStoreType} from '../../redux/redux-store';
import Profile, {ProfileType} from './Profile';
import {
    addPost,
    setUsersProfile,
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto
} from '../../redux/profile-reducer';
import {postType} from "../../types/types";
import {RouteComponentProps, withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userID: string
}

type MapStateToPropsType = {
    profile: any
    post: postType[]
    status: string
    userID: number | null
}

type MapDispachToPropsType = {
    addPost: (text: string) => void
    newPostChange: (text: string) => void
    setUsersProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    getStatus: (status: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispachToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = String(this.props.userID)
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userID !== this.props.match.params.userID) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userID}
                     profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        profile: state.postPage.profile,
        status: state.postPage.status,
        post: state.postPage.postData,
        userID: state.auth.id,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {addPost, setUsersProfile, getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)
(ProfileContainer)