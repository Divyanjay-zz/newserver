    (function(){
            $(document).ready(function(){
                var gridDiv = document.querySelector('#myGrid');
            var selectedCount= "";
             var gridOptions = {

                    columnDefs: [
                        {headerName: 'Date', field: 'date'},
                        {headerName: 'visits', field: 'deivces_installed',valueGetter: function(params){
                            if (selectedCount =="untracked_visits"){
                                return params.data.untracked_visits;
                            }
                            else {

                            return params.data.total_visits;
                        }}
                        }                       
                    ]
                };
                new agGrid.Grid(gridDiv, gridOptions);
               
                var getData = $.ajax('https://datagram.me/api/v1/d/_8HnmbiAyB3d98ZTyR5rOQ.json');                  
                
                getData.then(function(response, statusText, xhrObj){
                    
                    console.log(xhrObj);
                    
                    gridOptions.api.setRowData(response.responses.app_app_usage.data);
                }, 
                function(xhrObj, textStatus, err){
                    console.log(err);
                })
               document.querySelector('#total_visits').addEventListener('click',function(){
                selectedCount = "total_visits";
                gridOptions.api.refreshView();
               console.log('ondateup');
               });
               document.querySelector('#untracked_visits').addEventListener('click',function(){
               selectedCount = "untracked_visits";
                gridOptions.api.refreshView();
               console.log('ondatedown');
               });
 
            })            
        })(); 