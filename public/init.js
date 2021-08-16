class Widget {
  create(params) {
    const WIDGET_URL = `http://localhost:8080?key=${params.key}`;

    const iframe = document.createElement("iframe");
    iframe.src = WIDGET_URL;
    iframe.id = "widget-iframe";
    iframe.style.position = "fixed";
    iframe.style.bottom = "0px";
    iframe.style.right = "0px";
    iframe.style.overflow = "hidden";
    iframe.style.border = "0px";
    iframe.style.zIndex = "99999";
    iframe.style.width = "450px";
    iframe.style.height = "300px";

    document.body.appendChild(iframe);

    if (params.customer) {
      iframe.contentWindow.postMessage(
        {
          isWidget: true,
          customer: params.customer,
          mode: params.mode
        },
        "*"
      );
    }

    // window.addEventListener('message', (event) => {
    //     if (!event.data.isWidget) return

    //     if (event.data.isOpen) {
    //         iframe.width = '100%'
    //         iframe.height = '100%'
    //     } else {
    //         iframe.width = '300px'
    //         iframe.height = '150px'
    //     }
    // })
  }
}

window.Widget = Widget;
