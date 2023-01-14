import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig);

const root = createRoot(document.getElementById("root")!)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)