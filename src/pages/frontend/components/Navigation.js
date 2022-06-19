import React, { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SpecialistDetails from './SpecialistDetails'
import InfiniteScroll from 'react-infinite-scroller'
import { ApiDomain } from '../../../config/config';
import { Link, useParams, useNavigate } from "react-router-dom";
import Servicesfilter from './Specialistcomponents/Servicesfilter';
import FilterServicenew from './FilterServicenew';

// import { makeStyles } from "@material-ui/core/styles";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };

function A11yProps(index, category) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    category: category
  };
}




function Navigation() {
  const [filtCat, setFiltCat] = useState([])
  const [value, setValue] = useState()
  const [offset, setoffset] = useState(0)
  const [filtCategoryDat, setfiltCategoryData] = useState([])
  const [filtServiceDat, setfiltServiceData] = useState([])
  const [loading, setloading] = useState(false)
  const [hasmore, sethasmore] = useState(true)
  const [categories, setCatResult] = useState()
  const [previousLink, setpreviousLink] = useState("")
  const { category } = useParams()
  const navigate = useNavigate();


  const baseURL = ApiDomain + "/api/categories";


  const handleChange = (event, newValue) => {
    setloading(true)
    setValue(newValue);
  //  alert(previousLink + " " +  newValue)
    // console.log(category)
    if(newValue){
      navigate(`../specialist/${newValue}`)
    }else{
      navigate(`../specialist/`)
    }
  
    const cat = newValue
    let newoffset = 0

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    if (cat) {
      const newPrams = cat.split("-");
      const newPram = newPrams[0]
      const newPramText = newPrams[1]


      if (newPram === "category") {
        if (previousLink === cat) {
          newoffset = offset + 11
          setoffset(newoffset)
        } else {
          newoffset =  0
          setoffset(newoffset)
          setfiltCategoryData([])
        }


        fetch(`${ApiDomain}/api/businesses?category=${newPramText}&offset=${newoffset}&limit=10`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.status === 1) {
              setfiltServiceData([])

              setfiltCategoryData(filtCategoryDat => [...filtCategoryDat, ...data.data])
              // console.log(data)
              
              if (data.data.length <= 10) {
                sethasmore(false)
              } else {
                sethasmore(true)
              }
              setloading(false)


            } else {

            }
            

          }

          )
          .catch(error => console.log('error', error));
          setpreviousLink(cat)

      }else  if (newPram === "city") {
        if (previousLink === cat) {
          newoffset = offset + 11
          setoffset(newoffset)
        } else {
          newoffset =  0
          setoffset(newoffset)
          setfiltCategoryData([])
        }


        fetch(`${ApiDomain}/api/businesses?city=${newPramText}&offset=${newoffset}&limit=10`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.status === 1) {
              setfiltServiceData([])
              // setfiltCategoryData([])
              setfiltCategoryData(filtCategoryDat => [...filtCategoryDat, ...data.data])
              // console.log(data)
              
              if (data.data.length <= 10) {
                sethasmore(false)
              } else {
                sethasmore(true)
              }
              setloading(false)


            } else {

            }
            

          }

          )
          .catch(error => console.log('error', error));
          setpreviousLink(cat)

      }else if (newPram === "service") {

        if (previousLink === cat) {

          newoffset = offset + 11
          setoffset(newoffset)
        } else {
          newoffset =  0
          setoffset(newoffset)
          setfiltServiceData([])
        }

        fetch(`${ApiDomain}/api/businessbyservice?name=${newPramText}&offset=${newoffset}&limit=10`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.status === 1) {
              setfiltCategoryData([])
           
              setfiltServiceData(filtServiceDat => [...filtServiceDat, ...data.data])
              if (data.data.length <= 10) {
                sethasmore(false)
              } else {
                sethasmore(true)
              }
              console.log(data)
              setloading(false)


              // console.log(data)
            } else {

            }
           

          }

          )
          .catch(error => console.log('error', error));
          setpreviousLink(cat)
      }
    } else {
      if (previousLink === cat) {
        newoffset = offset + 10
        setoffset(newoffset)
      } else {
        newoffset =  0
        setoffset(newoffset)
        setfiltCategoryData([])
      }

      fetch(`${ApiDomain}/api/businesses?offset=${newoffset}&limit=10`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status === 1) {
          
            setfiltCategoryData(filtCategoryDat => [...filtCategoryDat, ...data.data])
            setloading(false)
            // alert(data.data.length)
            if (data.data.length <= 10) {
              sethasmore(false)
            } else {
              sethasmore(true)
            }
            console.log(filtCategoryDat)


          } else {

          }
         

        }
        )
        .catch(error => console.log('error', error));
        setpreviousLink(cat)
    }

  };
  async function getAllCategory() {

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
      },
      // mode:"no-cors"
      // redirect: 'follow'
    };

    await fetch(`${baseURL}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 1) {
          // setisLoding(false)
          setCatResult(result.data)
        } else {
          // setisLoding(false)
        }

      })

      .catch(error => console.log('error', error));

  }

  //   const classes=useStyles();
  useEffect(() => {
    // handleChange("", category)
    getAllCategory()


  }, [])


  return (
    <div>
      <FilterServicenew pramsOnchange={handleChange} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}
          style={{

            flexWrap: 'wrap'
          }}
        >


          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped tabs example"
            variant="scrollable"
            scrollButtons="auto"
            style={{

              flexWrap: 'wrap'

            }}
            sx={{ overflow: 'auto' }}

          >
            {categories && categories.map((category, key) => {
              return (
                <Tab
                  style={{
                    dispay: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    fontSize: '10px'
                  }}
                  wrapped
                  label={category.categoryName}  {...A11yProps(category._id.$oid, category.categoryName)}
                  value={"category-" + category._id.$oid}
                />


              )
            })}


          </Tabs>

        </Box>

        <InfiniteScroll
          pageStart={0}
          loadMore={() => handleChange("", category)}
          hasMore={hasmore && !loading}
          loader={<div className="" key={0}>Loading ...</div>}
        // useWindow={false}
        >
          {/* {filtCat} */}
          {filtCategoryDat.length !== 0 &&
            <div style={{
              paddingRight: "2%",
              paddingTop: "2%",
              paddingLeft: "35px"
            }}>
              <SpecialistDetails
                data={filtCategoryDat}
              />
            </div>
          }

          {filtServiceDat.length !== 0 &&
            <div style={{
              paddingRight: "2%",
              paddingLeft: "2%"
            }}>
              <Servicesfilter data={filtServiceDat} />
            </div>
          }


        </InfiniteScroll>



      </Box>

    </div>
  )
}

export default Navigation