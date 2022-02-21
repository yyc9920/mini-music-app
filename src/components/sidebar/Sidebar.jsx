import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Chart',
        icon: <i className='bx bx-bar-chart-alt-2'></i>,
        to: '/chart',
        section: 'chart'
    },
    {
        display: 'New Releases',
        icon: <i className='bx bx-calendar-star'></i>,
        to: '/new',
        section: 'new'
    },
    {
        display: 'Albums',
        icon: <i className='bx bx-album'></i>,
        to: '/albums',
        section: 'albums'
    },
    {
        display: 'Songs',
        icon: <i className='bx bx-music' ></i>,
        to: '/songs',
        section: 'songs'
    },
    {
        display: 'About',
        icon: <i className='bx bx-info-circle'></i>,
        to: '/about',
        section: 'about'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem === -1 ? 100 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <Link
            to='/'
            className="sidebar__logo"
        >
            Mini Music App
        </Link>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
