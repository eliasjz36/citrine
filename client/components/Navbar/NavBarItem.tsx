interface NavBarItem {
  title: string
  classprops?: string
}

const NavBarItem = ({ title, classprops }: NavBarItem) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
)

export default NavBarItem
