function Scrollheader() {
    const  headerColor = "#ffffff00";
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 30) {
            headerColor = "#ffffff00";
        } else {
            headerColor = "#ffffff";
        }
    }
   
    // return headerColor;
    
}

export default Scrollheader