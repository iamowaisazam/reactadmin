export default Array(50).fill().map((item,key) => {

    return {
        id:key,
        first_name:"User",
        last_name:key,
        username:"username"+key,
        phone:"03112239342",
        email:"user"+key+"@gmail.com"
    };
})


