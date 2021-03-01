import React from 'react';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import Overview from '../Components/Header/Overview';
import Analytics from '../Components/Header/Analytics';
import Campaign from '../Components/Header/Campaign';

// all the header items
const HeaderTabs = [
    {
        title: 'Overview',
        id : 1,
    },
    {
        title: 'Campaign',
        id : 2
    },
    {
        title: 'Analytics',
        id : 3
    }
]

// all the sidebar items
const siderTabs = [
    {
        icon : 'bi-speedometer2',
        id: 1
    },
    {
        icon : 'bi-chat',
        id: 2
    },
    {
        icon : 'bi-folder',
        id: 3
    },
    {
        icon : 'bi-envelope',
        id: 4
    },
    {
        icon : 'bi-gear',
        id: 5
    }
]

class Main extends React.Component {
    state = {
        activeTab : 1, //activeTab for header
        activeSideTab : 1 //activeTab for sidebar
    }

    //handleChange for header
    handleChange = (id) => {
        this.setState({
            activeTab : id
        })
    }

    //handleSideChange for sidebar
    handleSideChange = (id) => {
        this.setState({
            activeSideTab : id
        })
    }

    render() {
        const {activeTab} = this.state;
        return (
            <div>
                <Header HeaderTabs = {HeaderTabs} activeTab={this.state.activeTab} handleChange={this.handleChange} />
                <div className="container-fluid text-center">    
                    <div className="row content py_0">
                        <div className="col-sm-1 sidenav">
                        <Sidebar siderTabs= {siderTabs} handleSideChange={this.handleSideChange} activeSideTab={this.state.activeSideTab} />
                        </div>
                        <div className="col-sm-11 text-left parent_overview"> 
                            {activeTab === 1 ? <Overview /> : activeTab === 2 ? <Campaign /> : <Analytics />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main;