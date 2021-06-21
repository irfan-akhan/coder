import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import sidebar from "../styles/Sidebar.module.css";
import Link from "next/link";

const Sidebar = ({routes}) => {
  return (
    <aside className={sidebar.aside}>
      <Paper className={sidebar.Menu} style={{backgroundColor:'#f3E9E97c'}}>
        <MenuList>

          { routes && (
            Object.entries(routes).map(entry =>{
              return <MenuItem>
              <Link href={entry[1]}>
                <a>{entry[0]}</a>
              </Link>
            </MenuItem>
            }))
          }
        </MenuList>
      </Paper>
    </aside>
  );
};

export default Sidebar;
