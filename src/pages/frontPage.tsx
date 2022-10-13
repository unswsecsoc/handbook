import * as React from 'react';
import Button from '@material-ui/core/Button';
import background from '../images/hash-background.svg';
import logo from '../images/secsoc-logo.png';
import SimpleBottomNavigation from '../components/Footer';
// styles
const pageStyles = {
    color: '#232129',
    padding: 96,
    fontFamily: 'Nunito Sans',
};
const headingStyles = {
    fontFamily: 'Nunito Sans',
    marginTop: 0,
    marginBottom: 30,
    maxWidth: 400,
};
const headingAccentStyles = {
    color: '#663399',
};
const paragraphStyles = {
    marginBottom: 30,
};
const codeStyles = {
    color: '#8A6534',
    padding: 4,
    backgroundColor: '#FFF4DB',
    fontSize: '1.25rem',
    borderRadius: 4,
};
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
};
const doclistStyles = {
    paddingLeft: 0,
};
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
};

const linkStyle = {
    color: '#8954A8',
    fontWeight: 'bold',
    fontSize: 30,
    verticalAlign: '5%',
};

const docLinkStyle = {
    ...linkStyle,
    listStyleType: 'none',
    display: `inline-block`,
    marginBottom: 24,
    marginRight: 12,
};

const descriptionStyle = {
    color: '#232129',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const center = {
    // paddingTop: '100px',
    margin: 'auto',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '80vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
// markup
const frontPage = () => {
    // const [value, setValue] = React.useState(0);

    return (
        // <div style={center1}>
        <div style={center}>
            <main style={pageStyles}>
                <div style={{ display: 'flex' }}>
                    <div id="left box">
                        <title>Introductory Page</title>
                        <h1 style={headingStyles}>
                            Welcome to the <br></br>
                            <span style={headingAccentStyles}>
                                UNSW Security Society{' '}
                            </span>
                            Cybersecurity Handbook🎉🎉🎉
                        </h1>
                    </div>
                    <div
                        id="right box"
                        style={{
                            marginLeft: 'auto',
                            marginRight: 0,
                        }}
                    >
                        <img src={logo} width="200" height="200"></img>
                    </div>
                </div>
                <h2 style={linkStyle}>Introduction</h2>
                <p style={paragraphStyles}>
                    Our goal with this handbook is to provide an introductory
                    outlook on cybersecurity. To cultivate an enhanced
                    enthusiasm around cybersecurity and reduce the stigma that
                    cybersecurity is
                    <span style={headingAccentStyles}> hard </span>
                    Here we'll provide introductions to cyber security related
                    concepts coupled with interactive activities to facilitate a
                    deeper understanding of the subject matter.
                </p>
                <Button variant="outlined">Go to handbook</Button>
                {/* <h2 style={linkStyle}>Who are we?</h2>
            <p style={paragraphStyles}>
                Security Society at UNSW is a society that facilitates the
                learning of cyber security. The ultimate goal of our society is
                to reduce the stigma around the difficulty of cyber security and
                we achieve this via providing a key community where students can
                meet others interested in cyber security and to learn, develop,
                and test skills in hacking, cryptography, and general cyber
                security
            </p> */}
            </main>
            {/* <BottomNavigation showLabels></BottomNavigation> */}
            <SimpleBottomNavigation />
        </div>
        // </div>
    );
};

export default frontPage;
