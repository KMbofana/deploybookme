const ApiDomain = "http://localhost:5000/"
const UploadsDomain = `${ApiDomain}media/get_image?file=`
const UploadDomainFile = `${ApiDomain}media`
let token = ""
let name = ""
try{
const data = window.localStorage.user && JSON.parse(window.localStorage.user)
  

if (data) {
    token = data.token === "undefined" ? "" : data.token
    name = data.firstname === "undefined" ? "" : data.firstname
} else {
     token = ""
     name = ""
}
}
catch{
    token =""
    name = ""
}

export { ApiDomain, UploadsDomain, UploadDomainFile, token,name }