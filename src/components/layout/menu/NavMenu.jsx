function NavMenu({ children = [] }) {
  return (
    <nav className="group flex sm:flex-col justify-center list-none gap-3">
      {children}
    </nav>
  );
}
export default NavMenu;
