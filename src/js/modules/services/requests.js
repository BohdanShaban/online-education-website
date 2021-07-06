

// POST DATA f()
const postData = async( url, data) => {
    let result = await fetch( url, 
        {
            method: 'POST',
            body: data
        });
    return await result.text();
}

// GET DATA f()
const getResource = async (url) => {

    let result = await fetch(url);

    if( !result.ok) { throw new Error(`Couldnt fetch Url: ${result.url} With Err Status: ${result.status}` )}
    
    return await result.json();
}

export{ getResource, postData };