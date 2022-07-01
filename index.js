const classSelector = document.getElementById('class-select')

let request = async () => {
    // initiate request to dnd server
    let req = await fetch(`https://www.dnd5eapi.co/api/classes`)
    // get response from server and convert it to Json
    let res = await req.json()
    console.log('Classes', res)
    res.results.forEach((char) => {
        // console.log('Char', char.name)
        let option = document.createElement('option')
        option.setAttribute('value' , char.name)
        option.innerText = char.name
        classSelector.append(option)
    })
}

// request function will not auto run when the page loads
request()