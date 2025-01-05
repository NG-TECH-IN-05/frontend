interface Menu {
  id: number
  title: string
  path: string
  newTab: boolean
  submenu?: Menu[]
}

const menuData: Menu[] = [
  {
    id: 1,
    title: 'Acceuil',
    path: '/web',
    newTab: false,
  },
  {
    id: 2,
    title: 'A Propos',
    path: '/web/about',
    newTab: false,
  },
  {
    id: 33,
    title: 'Publications',
    path: '/web/publication',
    newTab: false,
  },
  {
    id: 4,
    title: 'Blog',
    newTab: false,
    submenu: [
      {
        id: 41,
        title: 'Link 1',
        path: '/web/link',
        newTab: false,
      },
      {
        id: 42,
        title: 'Link 2',
        path: '/web/link',
        newTab: false,
      },
      {
        id: 43,
        title: 'Link 3',
        path: '/web/link',
        newTab: false,
      },
    ],
    path: '',
  },
]
export default menuData
