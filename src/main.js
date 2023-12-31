import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const httplink = createHttpLink({
    uri: "https://countries.trevorblades.com/"
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httplink,
    cache,
})
createApp(App).use(store).use(router).mount('#app')
