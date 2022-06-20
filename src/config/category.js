  const baseURL = ApiDomain + "/api/categories";

  async function getAllCategory() {

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
      },
      mode:"no-cors",
      redirect: 'follow'
    };

    await fetch(`${baseURL}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 1) {
          // setisLoding(false)
          console.log(result.data)
        } else {
          // setisLoding(false)
        }

      })

      .catch(error => console.log('error', error));

  }

  