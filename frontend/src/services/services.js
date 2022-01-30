import axiosInstance from "./instance"

const getItems = (setItems, setLoading, path, slug='') => {
    axiosInstance.get(`${path}${slug}`)
    .then(res => {
        setItems(res.data)
        setLoading(false)
    }).catch(error => {console.log('Error is :', error)
    })
}

const createItem = (path, stuff) => {
    axiosInstance.post(`${path}`, 
        stuff, {
            headers: { "Content-Type": "multipart/form-data" }
        }
    ).then(res => console.log('Res is :', res)
    ).catch(error => {console.log('Error is :', error)
    })
}

const updateItem = (path, slug, stuff) => {
    axiosInstance.put(`${path}${slug}/`, 
        stuff, 
        {
            headers: { "Content-Type": "multipart/form-data" }
        }
    ).then(res => console.log('Res is :', res)
    ).catch(error => {console.log('Error is :', error) 
    })
}

const deleteItem = (path, slug) => {
    axiosInstance.delete(`${path}${slug}`
    ).then(res => console.log('Res is: ', res)
    ).catch(error => console.log('Error is :', error) 
    )
}

const getRefreshTokenData = () => {
    const refreshToken = localStorage.getItem('refresh_token')
    const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]))
    const { id } = tokenParts
    return localStorage.setItem('id', id)
}

export { getItems, createItem, updateItem, deleteItem, getRefreshTokenData }
