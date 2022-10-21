## jQuery Ajax Review

### when setting request headers

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

### When setting cookies,

- request from client side

```
$.cookie("mycookie","mayvalue",{**path:'/'**});

$.ajax({
   url: a_cross_domain_url,
   xhrFields: {
      withCredentials: true
   }
});
```

- response from server side

```
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Credentials: true

[payload]
```
