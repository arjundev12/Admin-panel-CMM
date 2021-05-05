import React from 'react'
import CIcon from '@coreui/icons-react'
import Wallet from 'src/views/wallets/wallets'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Driver',
    to: '/users',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Drivers',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Wallets',
        to: '/wallets/driver',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Customers',
    to: '/customers',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Customers',
        to: '/customers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Wallets',
        to: '/wallets/customer',
      },

    ]
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'News',
  //   to: '/News',
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,

  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Blogs',
  //   to: '/Blogs',
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,

  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
    ]
  }
]

export default _nav
