import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function withAuthRedirect<T>(Component: ComponentType<T>) {

    class WraperContainer extends React.Component<MapStatePropsType> {
        render(): React.ReactNode {
            let {isAuth, ...restProps} = this.props
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T} />
        }
    }

    const ConnectedAuthReduser = connect(mapStateToProps)(WraperContainer)
    return ConnectedAuthReduser
}


export default withAuthRedirect