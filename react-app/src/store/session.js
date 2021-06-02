const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = async() => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json()
    if(data.errors){
        return data;
    }
    dispatch(setUser(data.user));
    return data;
  }

  export const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json()
    if(data.errors){
        return data;
    }
    dispatch(setUser(data.user));
    return data;
  }

  export const logout = async () => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json()
    if(data.errors){
        return data;
    }
    dispatch(removeUser());
    return data;
  };


  export const signUp = async (username, email, password) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json()
    if(data.errors){
        return data;
    }
    dispatch(setUser(data.user));

    return data;
  }

  export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        default:
            return state;
    }
}
