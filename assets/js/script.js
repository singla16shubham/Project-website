

<% if (flash.success && flash.success.length > 0) {%>
  new Noty({
    theme: 'relax',
    text: '<%=flash.success%>',
    type: 'success',
    timeout: 1000,
    layout: 'topRight',

  }).show();
  <%} %> 

  <% if (flash.error && flash.error.length > 0) {%>
        new Noty({
            theme: 'relax',
            text: "<%= flash.error %>",
            type: 'error',
            layout: 'topRight',
            timeout: 1000
            
        }).show();    
    <%} %>
