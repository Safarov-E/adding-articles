export default {
    state:{
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        allPosts(state) {
            return state.posts
        },
        postsCount(state, getters) {
            return getters.validPosts.length
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    actions: {
        async fetchPosts({commit}, limit = 3) {
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit='+limit)
            const posts = await res.json()

            commit('updatePosts', posts)
        }
    }
}