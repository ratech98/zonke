import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.jsx'
import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux-store/store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

let persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>loading...</div>}>
        <BrowserRouter>
          <ToastContainer/>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
