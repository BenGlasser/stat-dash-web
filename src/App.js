import './App.css';
import Home from './pages/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { CustomProvider, Container, Header, Content } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/gql/GraphiQL',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <CustomProvider theme="dark">
      <ApolloProvider client={client}>
        <Container className="app"  >
            <Home />
        </Container>
      </ApolloProvider>
    </CustomProvider>

  );
}

export default App;
