import Menu from "./index";

function RootMenu() {
  return (
    <div className="col-end-1 row-span-2 sm:visible ">
      <Menu.Content>
        <Menu.Logo />
        <Menu.List>
          <Menu.ListItem />
        </Menu.List>
      </Menu.Content>
    </div>
  );
}
export default RootMenu;
