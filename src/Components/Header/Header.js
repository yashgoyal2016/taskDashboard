import React from 'react';
import './header.css';
import logo from '../../assets/img/perfect_logo.png';




class Header extends React.Component {
   
    render() {
        const {activeTab, HeaderTabs, handleChange} = this.props;
        return (
            <div className="row header_main ">
                <div className="col-sm-1">
                    <img src={logo} style={{width:'30px'}} alt='todo logo' />
                </div>
                <div className='col-sm-7 m_center'>
                    <div className='row py_0'>
                        {
                            HeaderTabs.map((header) => (<div className={`col ${activeTab === header.id ? 'activeTab': 'disabled_tab'}` } key={header.id} onClick={() => handleChange(header.id)}>{header.title}</div>))
                        }
                    </div>
                </div>
                <div className="col-sm-4" style={{textAlign:'end'}}><button className='premium_btn'>Premium</button></div>
            </div>
        )
    }
}


export default Header;