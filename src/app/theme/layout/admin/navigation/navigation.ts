import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'admin',
    title: 'Admin',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
      // {
      //   id: 'page-layouts',
      //   title: 'Page Layouts',
      //   type: 'collapse',
      //   icon: 'feather icon-layout',
      //   children: [
      //     {
      //       id: 'vertical',
      //       title: 'Vertical',
      //       type: 'item',
      //       url: '/layout/static',
      //       target: true
      //     },
      //     {
      //       id: 'horizontal',
      //       title: 'Horizontal',
      //       type: 'item',
      //       url: '/layout/horizontal',
      //       target: true
      //     }
      //   ]
      // }
    ]
  },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
