
export const getRequest = (url) =>{ 
    return fetch(url, { 
        method: 'GET'
    })
        .then(res => res.json());

};

export const postRequest = (url, body) => { 
    return fetch(url, { 
        method: 'POST',
        body: body, 
        headers: { 
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}

export const deleteRequest = (url) => { 
    return fetch(url, { 
        method: 'DELETE',
    })
        .then(res => res.json())

}

export const putRequest = (url, body) => { 
    return fetch(url, { 
        method: 'PUT',
        body: body,
        headers: { 
            'Content-Type': 'application'
        }
    })
        .then(res => res.json());
}