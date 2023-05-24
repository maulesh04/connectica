import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
    const BASE_URL = process.env.BASE_URL;

    return(
        <Box width={size} height={size}>
            <img 
                style={{objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`${BASE_URL}/assets/${image}`}
            />
        </Box>
    );
};

export default UserImage;