# Widget

Widget project build to use like iframe mode. This code is designed to large projects with modules and business rules.

**Framework:** Vue.js

**Why iframe?**

When use iframe to load script data in other sites, your script does not interfered by the hosting website content, like variables, encoding, etc...

**How it works?**

Widget will instantiate by the script in user website init.js (eg: www.widget-test.com/init.js)
After call the script, in html head or javascript, the user will instantiate a new instance of the widget passing some parameters, like the widget key and customer details

```
 <script>
    const t = new Widget();
    t.create({
    key: "RedWZ63M",
    customer: {
        name: "teste",
        email: "teste@teste.com"
    }
    });
</script>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Folder content

**public**  
Public exported files  
init.js - the script that user website will call

**assets**  
Folder to hold image, css, fonts contents

**components**  
Designed to store all widget components that you can share with multiple screens

**consts**  
Project consts  
Mode: widget mode (embebed or fixed)  
Time: Constants of time, like, recurrence time rule, widget delay and reactivation time

**hooks**  
Shared code logic that will change project store state

**services**  
Requests endpoints urls

**store**  
Widget state store separated by modules with specific context

**utils**  
Code shared in project  
http - client that will do the requests

**views**  
The widget pages and content

**try-widget**  
Sample for test the widget
