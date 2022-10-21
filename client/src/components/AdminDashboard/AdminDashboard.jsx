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
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([]);
  const [currentBrand, setCurrentBrand] = useState("");

  function handleLinkClick() {
    alert("Not supported yet");
  }

  async function createBrand(e) {
    e.preventDefault();
    await brandService
      .createBrand({ name: name })
      .then((res) => {
        setName("Done");
        setTimeout(() => setName(""), 1500);
      })
      .catch((e) => {
        setName("Error");
        setTimeout(() => setName(""), 1500);
      });
  }
  async function getBrands() {
    return await brandService
      .getAll()
      .then((res) => setBrands(res.data))
      .catch((e) => console.log(e));
  }
  async function deleteBrand(e) {
    e.preventDefault();
    await brandService
      .deleteBrand({ name: currentBrand})
      .then((res) => {
        alert("Done");
      })
      .then(() => getBrands())
      .catch((e) => {
        alert("Error");
      });
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
                <form onSubmit={createBrand}>
                  <Label isRequired="1" htmlFor="brand-name">
                    Brand
                  </Label>
                  <Input
                    required
                    className="Input Input__light-theme"
                    type="text"
                    placeholder="Brand name"
                    id="brand-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Edit brand</h3>
                <form onSubmit={deleteBrand}>
                  {brands.length ? (
                    <select
                      className={classes.sectionSelect}
                      value={currentBrand}
                      onChange={(e) => setCurrentBrand(e.target.value)}
                    >
                      {brands.map((item) => {
                        return (
                          <option key={item.id} value={item.name}>
                            {item.id} : {item.name}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    "There`s no brands yet"
                  )}
                  <div style={{ display: "flex", 'marginTop': '40px' }}>
                    <Button
                      onClick={() => getBrands()}
                      className={classes.sectionBtn}
                    >
                      Get all brands
                    </Button>
                    <Button type="submit">Delete</Button>
                  </div>
                </form>
              </div>
              <div>
                <button
                  className={classes.sectionLink}
                  onClick={handleLinkClick}
                >
                  Check availability
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
