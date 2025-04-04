import React, {  } from 'react';
import './App.css';
import { Switch, Route,  Routes } from 'react-router-dom';
import HomePage from '../src/pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component{
  constructor() { 
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() { 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) { 
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else { 
        this.setState({ currentUser: userAuth });
      } 
      // console.log(user);
    }
);  
  }  
  
  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }

  render () {
  return (
        <div>
          <Header currentUser= {this.state.currentUser}/>
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route path='/shop' element={<ShopPage/>} />
              <Route path='/signin' element={<SignInAndSignUp/>} />
          </Routes>
        </div>
    );
  }
}

export default App;
