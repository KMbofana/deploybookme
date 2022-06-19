import React from 'react'
import { Link } from 'react-router-dom'
function HeaderCategory(props) {
    return (
        
        <nav id="" className="navbar catbar"
            style={{

                justifyContent: "center",

                display: "block !important"


            }}
        >
            <ul>
                <li><Link className="nav-link" to={"../specialist/category-"+props.categories[0]._id.$oid}>{props.categories[0].categoryName}</Link></li>
                <li><Link className="nav-link" to={"../specialist/category-"+props.categories[1]._id.$oid}>{props.categories[1].categoryName}</Link></li>
                <li><Link className="nav-link" to={"../specialist/category-"+props.categories[2]._id.$oid}>{props.categories[2].categoryName}</Link></li>
                <li><Link className="nav-link" to={"../specialist/category-"+props.categories[3]._id.$oid}>{props.categories[3].categoryName}</Link></li>
                <li><Link className="nav-link" to={"../specialist/category-"+props.categories[4]._id.$oid}>{props.categories[4].categoryName}</Link></li>
                <li><Link className="nav-link" to={"../specialist/"}>All</Link></li>
                {/* <li className="dropdown"><a href="#"><span >more</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                    {props.categories && props.categories.map((category, key) => {
                        if(key > 4) {
                        return (

                          
                                <li><Link to={"../specialist/"+category._id.$oid}>{category.categoryName}</Link></li>
                               


                        )}

                    })}
                    </ul>
                </li> */}
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
        </nav>

    )
}

export default HeaderCategory