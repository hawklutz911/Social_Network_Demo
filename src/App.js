import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Nav/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Nav/Music/Music";
import Settings from "./components/Nav/Settings/Settings";
import News from "./components/Nav/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspence";

const DialogsContainer = React.lazy(()=>
import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(()=>
import('./components/Profile/ProfileContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized)
            return <Preloader/>
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/Dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)
                        }/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/News' component={News}/>
                        <Route path='/Music' component={Music}/>
                        <Route path='/Settings' component={Settings}/>
                        <Route path='/Login' component={Login}/>

                    </div>
                </div>)
    }
}
const mapStateToProps = (state) => ({
    initialized:state.app.initialized
})

export default compose (withRouter, connect  (mapStateToProps, {initializeApp})) (App);
