// Add your code here
function submitData(firstName, email) {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    }
  return fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(body => addNewContact(body.id))

        .catch(function(error) {
            alert("Unauthorized Access");
            document.body.append(error);
        })
}
function addNewContact(newID) {
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append(message)
}
submitData("Name", "name@name.com")



