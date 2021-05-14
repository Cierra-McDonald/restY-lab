
export const makeARequest = async (method, URL, body) => { 
    let res;

    if(method === 'GET') { 
        console.log('you want to get data!');
        res = await fetch(URL);
    } else { 
        res = await fetch(URL, { 
            method: method,
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json'},
        });
        return res.json();
    }
}
