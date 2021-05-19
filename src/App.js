import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './theme'  
import { ThemeProvider } from 'styled-components'
import Layout from './components/layout'
import Home from './components/Home/index'
import { VideoWrapper } from './styles'
import './styles.css'
function App(porps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <VideoWrapper>
          <Router>
            <Layout>
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
              </Layout>
          </Router>
        </VideoWrapper>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
