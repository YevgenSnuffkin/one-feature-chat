import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, Nullable, RootReducer } from '../types/'

export function container<OwnProps, StateProps = {}, DispatchProps = {}>(
    mapStateToProps?: (state: RootReducer, ownProps: OwnProps) => Nullable<StateProps>,
    mapDispatchToProps?: DispatchProps | ((dispatch: Dispatch, ownProps: OwnProps) => DispatchProps),
) {
    if (mapStateToProps) {
        return (component: React.StatelessComponent<OwnProps & StateProps & DispatchProps>) =>
            connect(mapStateToProps, mapDispatchToProps as {})(component) as {} as React.StatelessComponent<OwnProps>
    }

    return (component: React.StatelessComponent<OwnProps & StateProps & DispatchProps>) =>
        connect(null, mapDispatchToProps as {})(component) as {} as React.StatelessComponent<OwnProps>
}
