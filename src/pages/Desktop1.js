import { TextField, Button, Icon } from "@mui/material";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.rectangleDiv} />
      <div className={styles.navDiv}>
        <div className={styles.navContainerDiv} />
        <img className={styles.pensilLogo1} alt="" src="../pensil-logo-1.svg" />
        <div className={styles.homeDiv}>Home</div>
        <img
          className={styles.activeUnderlineIcon}
          alt=""
          src="../activeunderline.svg"
        />
        <div className={styles.resourcesDiv}>Resources</div>
        <div className={styles.pricingDiv}>Pricing</div>
        <TextField
          className={styles.inputStandardTextField}
          sx={{ width: 220 }}
          color="primary"
          variant="standard"
          type="text"
          placeholder="Search..."
          size="medium"
          margin="none"
        />
        <img
          className={styles.ellipseIcon}
          alt=""
          src="../ellipse-175@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.findYourDiv}>
            <p className={styles.findP}>Find</p>
            <p className={styles.findP}>Your</p>
            <p className={styles.blankLineP}>&nbsp;</p>
          </div>
          <div className={styles.commUnityDiv}>
            <p className={styles.findP}>Comm-</p>
            <p className={styles.blankLineP}>unity</p>
          </div>
          <div className={styles.fromOpenDiscussionToGated}>
            From open discussion to gated content. Create different groups for
            all kind of use case, like coaching, mentoring, courses, forums,
            live classes etc
          </div>
          <Button
            className={styles.joinButton}
            sx={{ width: 174 }}
            variant="text"
            color="primary"
            size="large"
          >{`Join >`}</Button>
        </div>
      </div>
      <img className={styles.heroIcon} alt="" src="../hero@2x.png" />
      <div className={styles.sidebarDiv}>
        <div className={styles.pensilDiv}>Pensil</div>
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <div className={styles.onePlatformForAllYourComm}>
          One platform for all your community needs
        </div>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.dashboardDiv}>Dashboard</div>
        <div className={styles.groupsDiv}>Groups</div>
        <div className={styles.rectangleDiv3} />
        <div className={styles.chatsDiv}>Chats</div>
        <div className={styles.rectangleDiv4} />
        <div className={styles.settingsDiv}>Settings</div>
        <img className={styles.vectorIcon1} alt="" src="../vector-11.svg" />
      </div>
      <img
        className={styles.settingAltLineLightIcon}
        alt=""
        src="../setting-alt-line-light.svg"
      />
      <img
        className={styles.chatPlusDuotoneLineIcon}
        alt=""
        src="../chat-plus-duotone-line.svg"
      />
      <img
        className={styles.settingLineLightIcon}
        alt=""
        src="../setting-line-light.svg"
      />
      <img className={styles.atomLightIcon} alt="" src="../atom-light.svg" />
      <Button
        className={styles.buttonTextAndIcon}
        sx={{ width: 187 }}
        variant="text"
        color="primary"
        size="large"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        Log in
      </Button>
      <Button
        className={styles.buttonContainedText}
        sx={{ width: 187 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Sign up
      </Button>
      <Button
        className={styles.buttonContainedText}
        sx={{ width: 187 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Sign up
      </Button>
      <img className={styles.vectorIcon2} alt="" src="../vector-12.svg" />
    </div>
  );
};

export default Desktop1;
