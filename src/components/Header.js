import { Box, Button, Container, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email, InsertDriveFile } from "@mui/icons-material";
import './Header.css';
import ColorContext from "../contexts/ColorContext";
import { useContext } from "react";


function Header() {
    const color = useContext(ColorContext);

    return (
        <div>
            <Container>
                <Box sx={{ marginTop: '40px', marginBottom: '20px' }}>
                    <Typography 
                        variant="h2"
                        align="center"
                        className="disable-select"
                        letterSpacing={-1}
                        fontFamily="'Roboto Mono', monospace"
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
                            endIcon={ <LinkedIn style={{ color }} /> }
                            sx={{ color: 'grey.400' }}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            key="GitHub"
                            href="https://www.github.com/jhshelnu/"
                            target="_blank"
                            endIcon={ <GitHub style={{ color }} /> }
                            sx={{ color: 'grey.400' }}
                        >
                            GitHub
                        </Button>
                        <Button
                            key="Email"
                            href="mailto:h@rry.sh"
                            target="_blank"
                            endIcon={ <Email style={{ color }} /> }
                            sx={{ color: 'grey.400' }}
                        >
                            Email
                        </Button>
                        <Button
                            key="Resume"
                            href="/resume.pdf"
                            target="_blank"
                            endIcon={ <InsertDriveFile style={{ color }} /> }
                            sx={{ color: 'grey.400' }}
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