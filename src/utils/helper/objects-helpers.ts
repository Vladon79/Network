export const updateObjectInArray = <T>(items: Array<any>, itemId: number, objPropName: any, newObjProps: any) => {
    return items.map(f => {
        if (f[objPropName] === itemId) {
            return {...f, ...newObjProps}
        }
        return f
    })
}