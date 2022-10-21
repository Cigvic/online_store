import Container from "components/Container/Container";
import classes from "./AdminDashboard.module.css";
import { TabList, Tab, TabPanels, TabPanel } from "components/Tabs/Tabs";
import { useState } from "react";
import brandService from "services/brandService";
import Label from "components/UI/Label/Label";
import Input from "components/UI/Input/Input";
import Button from "components/UI/Button/Button";

const AdminDashboard = ({ userInfo, ...props }) => {
  const [state, setState] = useState(1);
  const [title, setTitle] = useState("");

  function handleLinkClick() {
    alert("Not supported yet");
  }
  async function getBrands(e) {
    e.preventDefault();
    await brandService
      .getAll()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
  return (
    <Container className={`default centered flex ${classes.adminDashboard}`}>
      <Container className={classes.controlCol}>
        <TabList
          className={classes.tabs}
          activeClassName={classes.tabItemActive}
          selected={state}
          setSelected={setState}
        >
          <Tab index={1} className={classes.tabItem}>
            Account Information
          </Tab>
          <Tab index={2} className={classes.tabItem}>
            Manage brands
          </Tab>
          <Tab index={3} className={classes.tabItem}>
            Manage types
          </Tab>
          <Tab index={4} className={classes.tabItem}>
            Manage devices
          </Tab>
          <Tab index={5} className={classes.tabItem}>
            Manage orders
          </Tab>
          <Tab index={6} className={classes.tabItem}>
            Manage users
          </Tab>
        </TabList>
      </Container>
      <Container className={`${classes.infoCol}`}>
        <TabPanels selected={state}>
          <TabPanel index={1}>
            <h2 className={classes.sectionH2}>Account information</h2>
            <div className={classes.sectionGrid}>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Contact Information</h3>
                <p className={classes.sectionP}>
                  {userInfo.user.firstName} {userInfo.user.lastName}
                </p>
                <p className={classes.sectionP}>{userInfo.user.email}</p>
                <p className={classes.sectionP}>{userInfo.user.phoneNumber}</p>
              </div>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Newsletters</h3>
                <p className={classes.sectionP}>
                  You don't subscribe to our newsletter.
                </p>
              </div>
              <div>
                <button
                  className={classes.sectionLink}
                  onClick={handleLinkClick}
                >
                  Edit
                </button>
                <button
                  className={classes.sectionLink}
                  onClick={handleLinkClick}
                >
                  Change password
                </button>
              </div>
              <div>
                <button
                  className={classes.sectionLink}
                  onClick={handleLinkClick}
                >
                  Edit
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel index={2}>
            <h2 className={classes.sectionH2}>Manage Brands</h2>
            <div className={classes.sectionGrid}>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Create new brand</h3>
                <form onSubmit={getBrands}>
                  <Label isRequired="1" htmlFor="brand-title">
                    Brand
                  </Label>
                  <Input
                    className="Input Input__light-theme"
                    type="text"
                    placeholder="Brand Title"
                    id="brand-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Edit brand</h3>
                <p className={classes.sectionP}>
                  You don't subscribe to our newsletter.
                </p>
              </div>
              <div>
                <button className={classes.sectionLink} onClick={getBrands}>
                  Get all brands
                </button>
                <button
                  className={classes.sectionLink}
                  onClick={handleLinkClick}
                >
                  Change password
                </button>
              </div>
              <div>
                <button
                  className={classes.sectionLink}
                  onClick={handleLinkClick}
                >
                  Edit
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel index={3}>
            <h2 className={classes.sectionH2}>Manage Types</h2>
          </TabPanel>
          <TabPanel index={4}>
            <h2 className={classes.sectionH2}>Manage Devices</h2>
          </TabPanel>
          <TabPanel index={5}>
            <h2 className={classes.sectionH2}>Manage Orders</h2>
          </TabPanel>
          <TabPanel index={6}>
            <h2 className={classes.sectionH2}>Manage Users</h2>
          </TabPanel>
        </TabPanels>
      </Container>
    </Container>
  );
};

export default AdminDashboard;
