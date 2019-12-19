// Redux state
//////////////

// reduxAuthState
export interface reduxFullAuthState {
    isAuthenticated: Boolean;
    user: reduxSingleUserState
}

// reduxErrorState
export interface reduxFullErrorState {
    email?: String;
    password?: String;
    password2?: String;
    name?: String;
}

// reduxFullUserState
export interface reduxFullUserState {
    loading: Boolean;
    user: reduxSingleUserState;
    users: reduxMultipleUserState;
}

// reduxSingleUserState
export interface reduxSingleUserState {
    _id?: String;
    name?: String;
    email?: String;
}

// Full Redux state
export interface reduxFullState {
    auth: reduxFullAuthState;
    error: reduxFullErrorState;
    user: reduxFullUserState;
}

// reduxMultipleUsersState
export interface reduxMultipleUserState {
    error: boolean;
    records: number;
    currentPage: number;
    recordsPerPage: number;
    pages: number;
    data: [Object];
}