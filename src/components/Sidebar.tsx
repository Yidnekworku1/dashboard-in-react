import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  RiDashboardLine,
  RiUser3Line,
  RiSettings3Line,
  RiMessage2Line,
  RiQuestionLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiListCheck,
  RiStore2Line,
  RiCommunityLine
} from 'react-icons/ri';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);

  const sidebarItems = [
    { label: 'Dashboard', to: '/', icon: <RiDashboardLine />, key: 'dashboard' },
    { label: 'User Management', to: '/usermanagement', icon: <RiUser3Line />, key: 'usermanagement' },
    { label: 'Categories', to: '/categories', icon: <RiListCheck />, key: 'categories' },
    { label: 'Tenants', to: '/tenants', icon: <RiCommunityLine />, key: 'tenants' },
    { label: 'Settings', to: '/settings', icon: <RiSettings3Line />, key: 'settings' },
    { label: 'Messages', to: '/messages', icon: <RiMessage2Line />, key: 'messages' },
    { label: 'Help', to: '/help', icon: <RiQuestionLine />, key: 'help' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="collapse-btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
      </button>
      <ul className="sidebar-nav">
        {sidebarItems.map(item => (
          <NavLink key={item.key} to={item.to} className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar; 