const INITIAL_STATE = {
     posts: []
}

const reducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case "GETPOSTDATA":
               return {
                    ...state,
                    posts: action.posts
               }
          default:
               return state
     }
}

export default reducer;
