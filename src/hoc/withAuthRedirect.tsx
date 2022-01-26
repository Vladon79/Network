import React, { ComponentType } from "react";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStoreType } from "../redux/redux-store";

// function withAuthRedirect<T>(Component: ComponentType<T>) {

//     const WraperContainer = (props: any) => {
//         const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth)
//         if (!isAuth) return <Redirect to={'/login'} />
//         return <Component {...props} />
//     }

//     return WraperContainer
// }

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function withAuthRedirect1<T>(Component: ComponentType<T>) {

    class WraperContainer extends React.Component<MapStatePropsType> {
        render(): React.ReactNode {
            let { isAuth, ...restProps } = this.props
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...restProps as T} />
        }
    }
    const ConnectedAuthReduser = connect(mapStateToProps)(WraperContainer)
    return ConnectedAuthReduser
}



export default withAuthRedirect1