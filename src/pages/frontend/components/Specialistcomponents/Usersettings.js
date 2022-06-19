import React, { useState } from 'react'
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import Addbusiness from './Addbusiness';
import SettingsIcon from '@mui/icons-material/Settings';
import { ApiDomain, token } from '../../../../config/config';



function Usersettings() {
    const [notificationsData, setNotificationsData] = useState([])
    const [data, setData] = useState([])
    const [check, setChecked] = useState(false)
    const checkBusiness = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token ? token : "none"}`

            },

            // body: JSON.stringify({
            //     name: name,

            // })
        }

        try {
            const user = await fetch(`${ApiDomain}api/getBusinessByUserId`, requestOptions)

                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        setData(result.data)
                        setChecked(true)
                    } else {
                        setChecked(true)
                    }
                }
                )
                .catch(error => {

                    console.log(error);
                })
        } catch (error) {
            console.log.error(error)
        }
    }
    const getUsersettings = () => {
        const notices = [`New Order ${new Date()}`, "Jive wants a cut tomorrow", "Sarah is looking for a braids"]
        setNotificationsData(notices)
        console.log(notificationsData)
    }


    return (

        <Menu
            menuButton={<MenuButton
                style={{
                    borderStyle: 'none',
                    backgroundColor: 'transparent',
                    // paddingRight:'50px'

                }}
            >
                <Badge >
                    <SettingsIcon className='btn' style={{ padding: "0" }} onClick={checkBusiness} />
                </Badge>
            </MenuButton>}
            transition

        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <MenuItem>
                    <div
                  style={{
                      display:"flex",
                      flexDirection:"column"
                  }}
                    >
                        {check && <Addbusiness data={data} />}

                        {/* <button>nnbnbn</button> */}
                    </div>


                </MenuItem>
                {/* {notificationsData &&
                    notificationsData.map((notice) => {
                        return (
                            <MenuItem>
                                <button>nnbnbn</button>
                            </MenuItem>

                        )
                    })

                } */}
            </div>
        </Menu>

    )
}

export default Usersettings