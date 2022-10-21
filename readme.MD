## jQuery Ajax Review

- jQuery ajax syntax generally looks like the below

```
$.ajax({
    url: 'YourRestEndPoint',
    headers: {
        'Authorization':'Basic xxxxxxxxxxxxx',
        'X-CSRF-TOKEN':'xxxxxxxxxxxxxxxxxxxx',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: YourData,
    success: function(data){
      console.log('succes: '+data);
    }
  });
```
