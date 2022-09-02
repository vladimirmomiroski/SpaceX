export const fetchData = (url, setData) => 
{
    fetch(url)
    .then(res => res.json())
    .then(dataFromServer => 
    {
      	setData(dataFromServer);
    })
    .catch(error => 
    {
      	throw new Error(error);
    });
};

export const fetchPost = (url, item, setData) => 
{
	  const options = 
    {
      method: 'POST',
      headers: 
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    };

    fetch(url, options)
    .then(res => 
    {
    	if (res.status === 200) 
    	{
    		fetchData(url, setData);
    	}
    })
    .catch(error => 
    {
    	throw new Error(error);
    });
};