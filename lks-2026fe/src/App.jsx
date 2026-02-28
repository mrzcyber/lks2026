
import { BrowserRouter , Routes , Route } from 'react-router'
import './App.css'
import Home from './page/Home'
import Layout from './page/Layout'
import Katalog from './page/Katalog'
import Detail from './page/Detail'
import Login from './page/Login'
import Dash from './dashboard/Dash'
import Destinasi from './dashboard/Destinasi'
import Kategori from './dashboard/kategori'
import ProtectRoute from './dashboard/protect'
import Form from './componen/Form'
import Edit from './componen/Edit'



function App() {

  


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='dashboard' element={<ProtectRoute><Dash/></ProtectRoute>}>
    <Route index element={<Destinasi/>}/>
    <Route path='kategori' element={<Kategori/>}/>
    <Route path='form' element={<Form/>}/>
    <Route path='edit/:id'element={<Edit/>}/>
    </Route>


    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='destinasi' element={<Katalog/>}/>
    <Route path='detail/:id' element={<Detail/>}/>
    </Route>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
