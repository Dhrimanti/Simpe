{/* ///onChange={function(e){const value=e.target.value; setTitle(e.target.value)}} */}
        {/* onChange={function(e){const value=e.target.value; setDescription(e.target.value)}} */}
async function hello(){
    const response=await fetch("http://localhost:3000/")
    const data=await response.json()
    console.log(data)
}
hello()