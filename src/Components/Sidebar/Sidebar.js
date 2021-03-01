import React from 'react';


class Sidebar extends React.Component {
    
    render() {
        const {siderTabs, activeSideTab, handleSideChange} = this.props;
        return (
            <div style={{height:'100vh'}}>
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{height:'50%'}}>
                    {siderTabs.map((sidebar) => (<div className={`col ${activeSideTab === sidebar.id ? 'vertical_select': ''}` } key={sidebar.id} onClick={() => handleSideChange(sidebar.id)}>
                        <span className='vertical_select_inside'>
                            <i className={`bi ${sidebar.icon}`}></i>
                        </span>
                    </div>))}
                    
                </div>
            </div>
        )
    }
}


export default Sidebar;