import * as React from 'react';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Recents"
                    // icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    // icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    // icon={<LocationOnIcon />}
                />
            </BottomNavigation>
        </Box>
    );
}
