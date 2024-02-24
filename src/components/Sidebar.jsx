import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { useSelector } from 'react-redux';

const navItems = [
  {
    header: 'You',
    menus: [
      'Your Chanel',
      'History',
      'Your Videos',
      'Watch Later',
      'Show More',
    ],
  },
  {
    header: 'Explore',
    menus: [
      'Trending',
      'Shopping',
      'Music',
      'Live',
      'Gaming',
      'News',
      'Learning',
    ],
  }
];

const Sidebar = () => {

  const isSideBarOpen = useSelector((state)=> state.app.isSideBarOpen);
  
  return (
    <div className='p-2 border-r h-full'>
      {navItems.map((item, index) => (
        <ListContainer key={item.header} header={item.header} listItems={item.menus} isSideBarOpen={isSideBarOpen} />
      ))}
    </div>
  );
};

const ListItem = ({item,isSideBarOpen}) => {

  return (
    <div className='flex items-center pl-2 py-1 '>
      <span>
        <RxAvatar size={24}/>
      </span>
      {
        isSideBarOpen ? (<span className='ml-2 text-md'>{item}</span>) : null
      }
    </div>
  );
};

const ListContainer = (props) => {
  const { header, listItems,isSideBarOpen } = props;

  return (
    <>
      <h1 className='text-lg'>{header}</h1>
      {listItems.map((item) => (
        <ListItem key={item} item={item} isSideBarOpen={isSideBarOpen}/>
      ))}
    </>
  );
};

export default Sidebar;
