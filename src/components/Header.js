import { Box, Button, Container, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email, InsertDriveFile } from "@mui/icons-material";
import './Header.css';


function Header() {
    return (
        <div>
            <Container>
                <Box sx={{ marginTop: '40px', marginBottom: '20px' }}>
                    <Typography 
                        variant="h5"
                        align="center"
                        className="disable-select"
                    >
                        Harrison Shelnutt
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            key="LinkedIn"
                            href="https://www.linkedin.com/in/jhshelnu/"
                            target="_blank"
                            endIcon={ <LinkedIn /> }
                        >
                            LinkedIn
                        </Button>
                        <Button
                            key="GitHub"
                            href="https://www.github.com/jhshelnu/"
                            target="_blank"
                            endIcon={ <GitHub /> }
                        >
                            GitHub
                        </Button>
                        <Button
                            key="Email"
                            href="mailto:h@rry.sh"
                            target="_blank"
                            endIcon={ <Email /> }
                        >
                            Email
                        </Button>
                        <Button
                            key="Resume"
                            href="/resume.pdf"
                            target="_blank"
                            endIcon={ <InsertDriveFile /> }
                        >
                            Resume
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Header;