/**
 * performs an AJAX request to retrieve existing users that are not deleted.
 *
 * @return  an array of user data
 */
async function getExistingUsers() {
    let result = []
    let apiData = await fetch(
        'http://localhost:8080/user',
        {method: 'get'}
    )
    apiData = await apiData.json()

    let users = apiData.data
    users.forEach(function(user) {
        if(user.deleted == 0) {
            result.push(user)
        }
    })

    return result
}