import Router from "./utils/router";
import { CookiesProvider } from 'react-cookie';


const App = () => (
    <CookiesProvider>
        <Router />
    </CookiesProvider>
);

export default App;
