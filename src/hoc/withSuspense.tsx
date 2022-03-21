import React, {ComponentType, Suspense} from "react";
import Preloader from "../Components/common/Preloader/Preloader";

export function withSuspense(Component: ComponentType) {
    return () => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component />
            </Suspense>
        )
    }
}
